// FILE: src/data/config.ts
// ★ THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO ★
// Change text, links, project info, skills — everything is here.

export const siteConfig = {
  name: "Omar Benkhouya",
  initials: "OB",
  email: "omar.benkhouya.official@gmail.com",
  phone: "+212 613 309 792",
  location: "Kénitra, Morocco",
  github: "https://github.com/omarbenkhouya",
  linkedin: "https://www.linkedin.com/in/omar-benkhouya-858138317",
  availableDate: "July 2026",
  // ↓ Your photo in /public
  avatar: "/Profile.jpeg",
};

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
// image: put file in /public/images/projects/
// demo:  put file in /public/videos/demos/   (optional, set to null if none)
// github: set to null if private repo
// live:   set to null if no live URL

export const projects = [
  {
    id: "rag-system",
    featured: true,
    tag: "projects.featured_tag",
    accentColor: "#d4af37",
    title: {
      en: "Advanced Semantic Search — RAG System",
      fr: "Recherche Sémantique Avancée — Système RAG",
    },
    description: {
      en: "End-to-end Retrieval-Augmented Generation pipeline built on 59 real banking PDFs (~442K chars). Benchmarked 3 retrieval strategies — Dense cosine, Sparse BM25, Hybrid RRF — with a full evaluation suite. Proposed Diversity-Aware retrieval combining MMR with domain-specific banking entity scoring for French-Arabic terminology.",
      fr: "Pipeline RAG de bout en bout construit sur 59 PDF bancaires réels (~442K caractères). Comparaison de 3 stratégies de récupération — Dense cosinus, Sparse BM25, Hybrid RRF — avec une suite d'évaluation complète. Récupération Diversity-Aware combinant MMR avec un scoring d'entités bancaires spécifiques au domaine.",
    },
    metrics: [
      { value: "90%", label: "HitRate@5" },
      { value: "0.747", label: "MRR Score" },
      { value: "755", label: "Chunks" },
      { value: "1024", label: "Embed. Dim" },
    ],
    tech: ["Python", "BGE-M3", "ChromaDB", "Hybrid RRF", "Mistral/Ollama", "BM25", "FastAPI", "Next.js 14", "Streamlit", "MMR"],
    // ↓ Replace with your actual repo URL when public
    github: null,
    live: null,
    // ↓ Put rag-system.png in /public/images/projects/
    image: "/images/projects/rag-system.png",
    // ↓ Put rag-demo.mp4 in /public/videos/demos/ or set to null
    demo: "/videos/demos/rag-demo.mp4",
    category: "tags.ai",
  },
  {
    id: "soccernet",
    featured: false,
    tag: "tags.cv",
    accentColor: "#0057b8",
    title: {
      en: "SoccerNet — Player & Event Detection",
      fr: "SoccerNet — Détection de Joueurs & Événements",
    },
    description: {
      en: "Computer vision pipeline for broadcast football footage using the SoccerNet benchmark. Player detection, tracking, and event spotting across real match video at scale.",
      fr: "Pipeline de vision par ordinateur pour les images de football diffusées en utilisant le benchmark SoccerNet. Détection de joueurs, suivi et repérage d'événements dans des vidéos de matchs réels.",
    },
    metrics: [],
    tech: ["Python", "YOLOv8", "SoccerNet", "OpenCV", "PyTorch", "TensorFlow"],
    github: "https://github.com/omarbenkhouya",
    live: null,
    // ↓ Put soccernet.gif in /public/
    image: "/soccernet.gif",
    demo: "https://res.cloudinary.com/dlzvasqsh/image/upload/f_gif/v1778587270/soccernet_k7i9xc.gif",
    category: "tags.cv",
  },
  {
    id: "phone-store",
    featured: false,
    tag: "tags.fullstack",
    accentColor: "#ff6b35",
    title: {
      en: "Phone Store — Next.js + Supabase",
      fr: "Boutique Téléphones — Next.js + Supabase",
    },
    description: {
      en: "Production-ready e-commerce platform for mobile phones. Full-stack app with product catalog, authentication, cart, and order management — deployed on Vercel.",
      fr: "Plateforme e-commerce prête pour la production pour téléphones mobiles. Application full-stack avec catalogue produits, authentification, panier et gestion des commandes — déployée sur Vercel.",
    },
    metrics: [],
    tech: ["Next.js 14", "Supabase", "Vercel", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: null,
    live: "https://phone-store-jade-theta.vercel.app/",
    image: "/images/projects/phone-store.png",
    demo: "https://res.cloudinary.com/dlzvasqsh/video/upload/v1778601387/phone-store_lb8zyg.mp4",
    category: "tags.fullstack",
  },
  {
    id: "robotic-arm",
    featured: false,
    tag: "tags.robotics",
    accentColor: "#a78bfa",
    title: {
      en: "Intelligent Robotic Arm — Waste Sorting",
      fr: "Bras Robotique Intelligent — Tri des Déchets",
    },
    description: {
      en: "Robotic arm system for automated waste classification (plastic, metal, paper). Object detection with YOLOv8, motion control via ROS 2 + MoveIt2, simulation in Gazebo.",
      fr: "Système de bras robotique pour la classification automatisée des déchets (plastique, métal, papier). Détection d'objets avec YOLOv8, contrôle du mouvement via ROS 2 + MoveIt2, simulation dans Gazebo.",
    },
    metrics: [],
    tech: ["Python", "YOLOv8", "ROS 2", "MoveIt2", "Gazebo"],
    github: "https://github.com/omarbenkhouya",
    live: null,
    image: "/images/projects/robotic-arm.png",
    demo: null,
    category: "tags.robotics",
  },
  {
    id: "maroc-guide",
    featured: false,
    tag: "tags.fullstack",
    accentColor: "#f59e0b",
    title: {
      en: "Maroc Guide",
      fr: "Guide Maroc",
    },
    description: {
      en: "Web platform for discovering places and travel information across Morocco.",
      fr: "Plateforme web pour découvrir des lieux et des informations de voyage à travers le Maroc.",
    },
    metrics: [],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/aymanht/maroc-guid",
    live: "https://maroc-guid-fkng.vercel.app/",
    image: "/images/projects/chatbot.png",
    demo: "https://res.cloudinary.com/dlzvasqsh/video/upload/v1778588021/maroc-guide_nk5yui.mp4",
    category: "tags.fullstack",
  },
];

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
export const skills = {
  ai: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "LLMs / RAG", "Scikit-learn", "PEFT/LoRA", "YOLOv8", "OpenCV", "NLP", "Vector Search", "Pandas/NumPy"],
  fullstack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Oracle", "AWS", "Vercel", "REST APIs", "JavaScript"],
  infra: ["ChromaDB", "Ollama/Mistral", "BGE-M3", "BM25/RRF", "Semantic Chunking", "Streamlit", "ROS 2", "Gazebo"],
  tools: ["Python", "JavaScript", "SQL", "C/C++", "Linux", "Git/GitHub", "Google Colab", "Docker"],
};

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    id: "albarid",
    company: "Al Barid Bank",
    website: "https://www.albaridbank.ma/fr",
    logo: "/ALBARID.png",
    location: { en: "Rabat, Morocco", fr: "Rabat, Maroc" },
    type: "experience.pfe",
    startDate: { en: "Jan 2025", fr: "Jan 2025" },
    endDate: { en: "Present", fr: "Présent" },
    role: {
      en: "AI Engineer Intern — RAG System (PFE)",
      fr: "Stagiaire Ingénieur IA — Système RAG (PFE)",
    },
    bullets: {
      en: [
        "Built end-to-end RAG pipeline on 59 internal banking PDFs using BGE-M3 multilingual embeddings and ChromaDB vector store",
        "Benchmarked Dense, Sparse BM25, and Hybrid RRF retrieval strategies; optimal config achieved HitRate@5 = 90%, MRR = 0.747",
        "Designed Diversity-Aware retrieval combining MMR with domain-specific banking entity extraction for French-Arabic terminology",
        "Delivered FastAPI backend and Next.js 14 frontend for internal production use",
      ],
      fr: [
        "Construction d'un pipeline RAG de bout en bout sur 59 PDFs bancaires internes utilisant les embeddings multilingues BGE-M3 et ChromaDB",
        "Comparaison de stratégies Dense, BM25 Sparse, et Hybrid RRF ; config optimale : HitRate@5 = 90%, MRR = 0.747",
        "Conception d'une récupération Diversity-Aware combinant MMR avec extraction d'entités bancaires pour la terminologie franco-arabe",
        "Livraison d'un backend FastAPI et d'un frontend Next.js 14 pour usage interne en production",
      ],
    },
    accentColor: "#d4af37",
  },
  {
    id: "alphastra",
    company: "Alphastra",
    website: "https://alphastra.com/",
    logo: "/alphastra_logo.png",
    location: { en: "Rabat, Morocco", fr: "Rabat, Maroc" },
    type: "experience.internship",
    startDate: { en: "Jul 2025", fr: "Juil. 2025" },
    endDate: { en: "Sep 2025", fr: "Sep. 2025" },
    role: {
      en: "Full-Stack Developer Intern — iPha Project",
      fr: "Stagiaire Développeur Full-Stack — Projet iPha",
    },
    bullets: {
      en: [
        "Contributed to the iPha full-stack web application for medical prescription management using Next.js, React, and MongoDB Mongoose",
        "Integrated AWS cloud services for storage and deployment infrastructure",
        "Participated in weekly product discussions on Generative AI and Agentic AI integration roadmap",
      ],
      fr: [
        "Contribution au développement de l'application web full-stack iPha pour la gestion des ordonnances médicales avec Next.js, React et MongoDB Mongoose",
        "Intégration des services cloud AWS pour l'infrastructure de stockage et de déploiement",
        "Participation aux discussions hebdomadaires sur la feuille de route d'intégration de l'IA Générative et Agentique",
      ],
    },
    accentColor: "#0057b8",
  },
];

// ─────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────
export const certifications = [
  {
    issuer: "IBM",
    name: "Machine Learning with Python",
    link: "https://www.coursera.org/account/accomplishments/verify/I5XQ29POX4WA?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    issuer: "IBM",
    name: "Develop Generative AI Applications",
    link: "https://www.coursera.org/account/accomplishments/verify/5IKNYSU009ZQ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    issuer: "IBM",
    name: "Introduction to Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/verify/MW1DFAUCWB87?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    issuer: "IBM",
    name: "What is Data Science?",
    link: "https://www.coursera.org/account/accomplishments/verify/S133TDQBFETW?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    issuer: "Oracle",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D5FA82BC8C5EAC6A634FC3A3975C9AA707B36D28A4528B516B0816E4C1823034",
  },
  {
    issuer: "365 Data Science",
    name: "Certificate of Achievement in SQL",
    link: "https://learn.365datascience.com/certificates/CC-03AA1B3950/",
  },
  {
    issuer: "365 Data Science",
    name: "Deep Learning with TensorFlow 2",
    link: "https://learn.365datascience.com/certificates/CC-9C185C2DF9/",
  },
  {
    issuer: "365 Data Science",
    name: "Data Cleaning and Preprocessing with pandas",
    link: "https://learn.365datascience.com/certificates/CC-3A634D61BD/",
  },
  {
    issuer: "365 Data Science",
    name: "Data Preprocessing with NumPy",
    link: "https://learn.365datascience.com/certificates/CC-164035289C/",
  },
  {
    issuer: "365 Data Science",
    name: "Machine Learning with Decision Trees and Random Forests",
    link: "https://learn.365datascience.com/certificates/CC-399E926C2D/",
  },
  {
    issuer: "365 Data Science",
    name: "Machine Learning with K-Nearest Neighbors",
    link: "https://learn.365datascience.com/certificates/CC-399E926C2D/",
  },
  {
    issuer: "365 Data Science",
    name: "Machine Learning with Python",
    link: "https://learn.365datascience.com/certificates/CC-ABA55DA8EA/",
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    degree: { en: "Master's in AI & Connected Objects", fr: "Master en IA & Objets Connectés" },
    institution: "Université Ibn Tofail",
    location: { en: "Kénitra, Morocco", fr: "Kénitra, Maroc" },
    period: { en: "Oct 2024 — Jul 2026", fr: "Oct. 2024 — Juil. 2026" },
  },
  {
    degree: { en: "Bachelor's in AI & Data Engineering", fr: "Licence en IA & Ingénierie de Données" },
    institution: "Université Ibn Tofail",
    location: { en: "Kénitra, Morocco", fr: "Kénitra, Maroc" },
    period: { en: "Oct 2023 — Jun 2024", fr: "Oct. 2023 — Juin 2024" },
  },
];
