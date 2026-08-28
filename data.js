/* ─────────────────────────────────────────────────────────────
   EDIT EVERYTHING HERE. No other file needs touching.
   *text between asterisks* renders as italic emphasis.
   Empty an array (e.g. articles: []) and that section disappears.
   ───────────────────────────────────────────────────────────── */

const DATA = {
  brand: ["Nguyen Tuan", "Minh"],
  role: ["Full-stack", "Developer"],
  tagline:
    "My goal is to *write maintainable, clean and understandable code* — and to keep an AI-assisted workflow that stays consistent across sessions.",

  about: {
    intro:
      "Hello! I'm Minh, a *fullstack developer* based in Ho Chi Minh City. Software Engineering at FPT University Danang, shipping React, Node.js and Spring Boot products since 2024.",
    photo: "https://avatars.githubusercontent.com/u/144188010?v=4",
  },

  socials: [
    { icon: "github", label: "Github", url: "https://github.com/nguyentuanminh0763" },
    { icon: "linkedin", label: "Linkedin", url: "https://www.linkedin.com/in/minh-nguyen-dl0763/" },
    { icon: "mail", label: "E-mail", url: "mailto:minhnt0763@gmail.com" },
    // Public site = public phone number. Delete this line if you'd rather not.
    { icon: "phone", label: "0973 350 424", url: "tel:+84973350424" },
  ],

  // Rendered as staggered cards. Add/remove groups freely.
  skills: [
    { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"] },
    {
      title: "Front-end",
      // Vue isn't on your CV — it's here because of the iService365 web app.
      items: ["React", "React Native", "Vue", "Redux", "TailwindCSS", "Bootstrap", "i18next", "Figma → UI"],
    },
    { title: "Back-end", items: ["Node.js", "Express.js", "Spring Boot"] },
    { title: "Databases", items: ["MySQL", "MongoDB", "Redis"] },
    {
      title: "Architecture",
      items: ["RESTful API", "Microservices", "Event-driven (Apache Kafka)"],
    },
    {
      title: "DevOps & Testing",
      items: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Jest", "Postman"],
    },
    {
      title: "AI-first workflow",
      items: ["Claude Code", "Cursor", "OpenAI Codex", "GitHub Copilot", "Persistent rule & state files", "Decision journals"],
    },
  ],

  // Newest first. `to: ""` renders as "Present".
  work: [
    {
      from: "02/2026",
      to: "08/2026",
      length: "7 months",
      company: "iService365 Platform, Philippines",
      role: "Freelance fullstack developer",
      stack: "React Native · Vue · Node.js · MongoDB",
    },
    {
      from: "04/2025",
      to: "09/2025",
      length: "6 months",
      company: "FPT Software Da Nang",
      role: "Fresher software engineer",
      stack: "React & Spring Boot",
    },
    {
      from: "2022",
      to: "06/2026",
      length: "Education",
      company: "FPT University Danang",
      role: "B.Sc. Software Engineering",
      stack: "TOEIC 645",
    },
  ],
  workTotal: "1 year 1 month",

  /* Drop screenshots into images/ and list them here, e.g.
     images: ["images/fitlink-1.png", "images/fitlink-2.png"]
     Leave the array empty and a placeholder tile is drawn instead.
     `repo` is the code link, `live` the deployed one — omit either. */
  projects: [
    {
      name: "iService365 Platform",
      meta: "02/2026 – 08/2026 · Team of 5 · Private client repo",
      tags: ["React Native", "Vue", "Node.js", "MongoDB", "REST API", "Multi-tenant SaaS"],
      body: [
        "A *multi-tenant SaaS platform for property operations*, where property managers, security, cleaning and M&E providers all work on shared sites through separate, role-scoped apps.",
        "React Native was my main assignment: I developed the *Property Management module* as part of the five-person Vietnam team, implementing the mobile screens from Figma designs. I also worked across the *Vue web app and the Node.js backend*.",
        "Built event management (CRUD), facility booking, Emergency Contact and Visitor Management, integrating REST APIs scoped by organization and site so that *tenant data stays isolated*. Tested and reported defects across mobile and web, then worked with the team to reproduce and verify fixes.",
      ],
      images: [
        "images/iservice365-property-dashboard.webp",
        "images/iservice365-technician-app.webp",
        "images/iservice365-login.webp",
      ],
    },
    {
      name: "Fit-Link Platform",
      meta: "2024 – 2025 · Team of 5 · Team Leader",
      tags: ["React 19", "Node.js", "Socket.IO", "MongoDB", "Redis", "GitHub Actions"],
      body: [
        "A *marketplace connecting students with personal trainers*, split into three role-based modules — Student, PT and Admin — over 30+ REST endpoints.",
        "I led the team on architecture, review and docs, and personally coded the *core booking flow* — package, time slot, schedule, travel fee — plus the PT approval workflow. Compound MongoDB indexes on ptId + date + timeSlot prevent double-booking and keep availability queries fast.",
        "Features: multi-step booking wizard, PayOS payment, JWT + Google OAuth, role-based access control, real-time chat and notifications, OpenAI chatbot.",
      ],
      repo: "https://github.com/fitlink-platform/fitlink-frontend",
      images: [
        "images/fitlink-landing.webp",
        "images/fitlink-booking-packages.webp",
        "images/fitlink-booking-location.webp",
        "images/fitlink-trainer-profile.webp",
      ],
    },
    {
      name: "GearXpert",
      meta: "2025 – 2026 · Team of 5 · Fullstack Developer",
      tags: ["React 19", "Redux", "Express", "MongoDB", "Jest", "i18next"],
      body: [
        "A *gear rental marketplace* serving four roles — Customer, Supplier, Admin and Operation Staff — bilingual in English and Vietnamese.",
        "Features: JWT + Google OAuth + OTP, *eKYC verification via Face++*, cart and rental lifecycle, PayOS payment, damage reporting and compensation, a Gemini chatbot, and AI dynamic pricing.",
        "I wrote the Jest unit tests covering the booking flow, pricing calculation and rental status transitions.",
      ],
      repo: "https://github.com/cuongdeverloper/GearXpert",
      live: "https://gearxpert.online/",
      images: [
        "images/gearxpert-smartgear-ai.webp",
        "images/gearxpert-device-detail.webp",
      ],
    },
    {
      name: "OSA — One Scan Away",
      meta: "2026 · Solo · Fullstack Developer",
      tags: ["React 19", "Vite 6", "TailwindCSS", "React Router v7", "Express", "Mongoose"],
      body: [
        "An *emotional gifting platform*: a physical gift paired with a QR code that opens a personalized memory page — photos, message, timeline, audio.",
        "Features: gift-set marketplace with cart and checkout, a QR memory setup wizard (media upload, message and timeline editor), four QR service types, a public landing page, and admin CRUD.",
        "Built on an *AI-assisted workflow* with persistent rule and state files plus a decision journal, so the architecture stayed consistent across sessions.",
      ],
      repo: "https://github.com/nguyentuanminh0763/osa-one-scan-away",
      images: [],
    },
    {
      name: "FCar",
      meta: "2024 · Team of 5 · Fullstack Developer",
      tags: ["React", "Spring Boot", "MySQL", "WebSocket", "Mapbox GL", "ApexCharts"],
      body: [
        "A *car booking platform for university communities*, covering the whole ride lifecycle from search through payment.",
        "Features: JWT + Google OAuth + OTP over Twilio SMS, Stripe payment, real-time booking notifications on STOMP/SockJS, Google Maps geocoding and routing, Firebase push, and an admin analytics dashboard.",
        "I owned the *Admin and Customer (rider booking) modules* and wrote the project documentation.",
      ],
      repo: "https://github.com/SWP391-SE07-ManagerCar-Ogranization/repo-fe",
      images: [],
    },
  ],

  /* Nothing written yet — the hero carousel and the Articles section both stay
     hidden while this is empty. Add { title, excerpt, url } to bring them back. */
  articles: [],

  footerNote: ["Handcrafted by ME /", "Designed after Taisia Tsyganok /", "Powered by vanilla JS"],
};
