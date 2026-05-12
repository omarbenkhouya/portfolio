// FILE: src/app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Omar Benkhouya — AI Engineer & Full-Stack Developer",
  description:
    "AI Master's student graduating July 2026. Building intelligent systems and full-stack products — RAG pipelines, computer vision, Next.js apps.",
  keywords: ["AI Engineer", "Full-Stack Developer", "RAG", "Next.js", "Machine Learning", "Morocco"],
  authors: [{ name: "Omar Benkhouya" }],
  openGraph: {
    title: "Omar Benkhouya",
    description: "AI Engineer & Full-Stack Developer",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${syne.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
