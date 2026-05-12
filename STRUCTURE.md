# Portfolio — File Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── avatar.jpg          ← PUT YOUR PHOTO HERE
│   │   └── projects/
│   │       ├── rag-system.png      ← RAG project screenshot
│   │       ├── soccernet.png       ← SoccerNet screenshot
│   │       ├── phone-store.png     ← Phone store screenshot
│   │       ├── robotic-arm.png     ← Robotic arm screenshot
│   │       └── chatbot.png         ← Chatbot screenshot
│   ├── videos/
│   │   └── demos/
│   │       ├── rag-demo.mp4        ← RAG system demo video
│   │       ├── soccernet-demo.mp4  ← SoccerNet demo video
│   │       └── phone-store-demo.mp4
│   └── icons/
│       └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← Root layout (fonts, theme provider)
│   │   ├── page.tsx                ← Home page (imports all sections)
│   │   ├── globals.css             ← Global styles + CSS variables
│   │   └── [locale]/               ← i18n routing (fr / en)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          ← Fixed top navigation
│   │   │   └── Footer.tsx          ← Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx            ← Hero section
│   │   │   ├── Projects.tsx        ← Projects bento grid
│   │   │   ├── Skills.tsx          ← Scrolling marquee
│   │   │   ├── Experience.tsx      ← Timeline
│   │   │   ├── Certifications.tsx  ← Cert cards grid
│   │   │   └── Contact.tsx         ← Contact links
│   │   └── ui/
│   │       ├── background-beams.tsx     ← Aceternity (copy-paste)
│   │       ├── typewriter-effect.tsx    ← Aceternity (copy-paste)
│   │       ├── text-generate-effect.tsx ← Aceternity (copy-paste)
│   │       ├── spotlight.tsx            ← Aceternity (copy-paste)
│   │       ├── bento-grid.tsx           ← Magic UI (copy-paste)
│   │       ├── marquee.tsx              ← Magic UI (copy-paste)
│   │       └── project-card.tsx         ← Custom project card
│   │
│   ├── data/
│   │   └── config.ts               ← ★ ALL YOUR CONTENT LIVES HERE ★
│   │
│   ├── lib/
│   │   └── utils.ts                ← cn() utility
│   │
│   └── hooks/
│       └── useTranslation.ts       ← i18n hook
│
├── messages/
│   ├── en.json                     ← English translations
│   └── fr.json                     ← French translations
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
