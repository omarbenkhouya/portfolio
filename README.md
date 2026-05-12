# Omar Benkhouya — Portfolio

## ⚡ Quick Start

```bash
# 1. Create your Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint
cd portfolio

# 2. Install dependencies
npm install next-themes next-intl framer-motion lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-slot

# 3. Install shadcn/ui
npx shadcn@latest init
# When prompted:
#   Style: Default
#   Base color: Slate
#   CSS variables: Yes

# 4. Copy all the files from this repo into your project
#    (maintain the same folder structure)

# 5. Run the dev server
npm run dev
# → Open http://localhost:3000
```

## 📁 Where to Add Your Media

| What | Where to put it | File name |
|------|----------------|-----------|
| Your photo | `/public/images/profile/` | `avatar.jpg` |
| RAG screenshot | `/public/images/projects/` | `rag-system.png` |
| SoccerNet screenshot | `/public/images/projects/` | `soccernet.png` |
| Phone store screenshot | `/public/images/projects/` | `phone-store.png` |
| Robotic arm screenshot | `/public/images/projects/` | `robotic-arm.png` |
| Chatbot screenshot | `/public/images/projects/` | `chatbot.png` |
| RAG demo video | `/public/videos/demos/` | `rag-demo.mp4` |
| SoccerNet demo | `/public/videos/demos/` | `soccernet-demo.mp4` |
| Phone store demo | `/public/videos/demos/` | `phone-store-demo.mp4` |

> **No image yet?** No problem. The app shows a styled placeholder until you add the files.

## ✏️ How to Update Content

**Everything is in one file:** `src/data/config.ts`

- Change your email, phone, GitHub → update `siteConfig`
- Add a project or change description → update `projects` array
- Change skills → update `skills` object
- Update job bullets → update `experience` array

## 🌍 Languages

Switch language using the `FR / EN` button in the navbar.
Translations live in:
- `messages/en.json` — English
- `messages/fr.json` — French

## 🎨 Theme

Dark/Light toggle is in the navbar. Default is dark.
Colors are in `src/app/globals.css` as CSS variables.
To change the accent color from cyan, update `--accent` in both `:root` and `.dark`.

## 🚀 Deploy to Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/omarbenkhouya/portfolio.git
git push -u origin main

# Then go to vercel.com → New Project → import your repo → Deploy
# Your URL: omarbenkhouya.vercel.app
```

## 🔧 Add Aceternity UI Components (optional, for extra effects)

If you want to add the animated background beams or typewriter to the hero:

```bash
# Install Aceternity deps (already included if you ran the npm install above)
npm install framer-motion clsx tailwind-merge

# Copy components from https://ui.aceternity.com/components
# Paste them into src/components/ui/
# Import and use in your section files
```

Recommended additions:
- **Hero background**: https://ui.aceternity.com/components/background-beams
- **Name animation**: https://ui.aceternity.com/components/text-generate-effect  
- **Typewriter**: https://ui.aceternity.com/components/typewriter-effect
- **Spotlight**: https://ui.aceternity.com/components/spotlight
