// FILE: src/components/ui/ProjectDemo.tsx
"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDemoProps {
  src: string;
  compact?: boolean;
}

export function ProjectDemo({ src, compact }: ProjectDemoProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Play button overlay on the card image */}
      <button
        onClick={() => setOpen(true)}
        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Watch demo"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-background/90 text-xs font-mono uppercase tracking-wider">
          <Play size={12} className="text-cyan-400" />
          {compact ? "Demo" : "Watch Demo"}
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full bg-background border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-10 right-0 text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5"
              >
                <X size={12} /> Close
              </button>

              {/* Media: support video files, GIF/images, and YouTube embeds */}
              {(() => {
                const isYouTube = /youtu(?:\.be|be\.com)/i.test(src);
                const isImage = /\.(gif|png|jpe?g|webp)(?:\?|$)/i.test(src);
                const isVideo = /\.(mp4|webm|mov)(?:\?|$)/i.test(src) || /video\//i.test(src);

                if (isYouTube) {
                  // Extract video id and render embed
                  let videoId = null;
                  try {
                    const url = new URL(src);
                    if (url.hostname.includes('youtu.be')) {
                      videoId = url.pathname.slice(1);
                    } else {
                      videoId = url.searchParams.get('v');
                    }
                  } catch (e) {
                    // fallback regex
                    const m = src.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
                    videoId = m ? m[1] : null;
                  }

                  const embedSrc = videoId
                    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`
                    : src;

                  return (
                    <div className="w-full aspect-video">
                      <iframe
                        src={embedSrc}
                        title="Demo video"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full"
                      />
                    </div>
                  );
                }

                if (isImage) {
                  return <img src={src} alt="Demo" className="w-full object-contain" crossOrigin="anonymous" />;
                }

                // Default: use HTML5 video for mp4/webm or unknown types
                return (
                  <video src={src} controls autoPlay className="w-full aspect-video">
                    Your browser does not support the video tag.
                  </video>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
