/* ─────────────────────────────────────────────────────────────
   EDIT EVERYTHING HERE. No other file needs touching.
   *text between asterisks* renders as italic emphasis.
   Empty an array (e.g. articles: []) and that section disappears.
   ───────────────────────────────────────────────────────────── */

const DATA = {
  brand: ["Nguyen Tuan", "Minh"],
  role: ["Full-stack", "Developer"],
  tagline:
    "Software Engineer dedicated to *high-reliability systems, financial idempotency, and cloud-native architectures* — delivering scalable products with rigorous domain modeling.",

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
    { title: "Languages", items: ["JavaScript (ESM)", "TypeScript", "Java", "SQL", "HTML5", "CSS3"] },
    {
      title: "Front-end",
      items: ["React 19", "React Native", "Vue", "Vite", "TailwindCSS", "TanStack Query", "Redux", "Figma → UI"],
    },
    { title: "Back-end", items: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Socket.IO (Auth Handshake)"] },
    { title: "Databases & Cache", items: ["MongoDB (ACID Transactions)", "Redis (2-Tier Caching)", "MySQL"] },
    {
      title: "Architecture & Security",
      items: ["Microservices", "Event-driven", "RBAC & JWT (HttpOnly Cookie)", "Anti-IDOR & Concurrency Control"],
    },
    {
      title: "DevOps & Testing",
      items: ["Docker (Multi-stage)", "Docker Compose (Replica Set)", "Azure DevOps Pipelines", "GitHub Actions", "Vitest", "Jest"],
    },
    {
      title: "AI-first workflow",
      items: ["Claude Code", "Cursor", "Google Antigravity", "Decision journals", "Persistent architecture state"],
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
      name: "FitLink Platform",
      status: "Active Overhaul (2026)",
      meta: "2024 – 2025 (Team of 5 · Leader) · 2026 (Solo Architecture & DevOps Overhaul)",
      tags: ["React 19", "TanStack Query v5", "Node.js", "Express", "MongoDB (Replica Set)", "Redis", "Docker", "Azure DevOps", "Vitest", "PayOS"],
      tabs: {
        "Overview": [
          "*Problem & Scope*: Marketplace platform connecting trainees with personal trainers across 3 role-based portals (Student, PT, Admin) with 30+ RESTful APIs.",
          "*Role & Evolution*: Led 5-person team in 2025. In 2026, *independently re-engineered core architecture, security, and DevOps* to meet production-grade reliability.",
          "*Execution*: Upgraded monolithic local setup into containerized micro-services with automated CI validation across all pull requests."
        ],
        "Backend & Data": [
          "*Financial Idempotency*: Applied *MongoDB ACID Transactions with unique `(refId, refType)` constraints* ➔ Prevented duplicate wallet crediting on network retries and refresh spam.",
          "*Concurrency Control*: Replaced app-level checks with *DB-level Compound Index (`pt + startTime`) + TTL* ➔ Eliminated slot race conditions under simultaneous bookings.",
          "*2-Tier Resilient Caching*: Built *Redis cache with in-memory fallback* and `X-Cache` response headers ➔ Maintained API uptime during cache node failures."
        ],
        "Frontend & UX": [
          "*Performance & Code-Splitting*: Built with *React 19 + Vite 6*, lazy-loading *42 distinct routes* ➔ Significantly reduced initial bundle footprint by serving route assets on demand.",
          "*Server State Management*: Implemented *TanStack Query v5* with stale-while-revalidate caching ➔ Minimized duplicate network calls across page transitions.",
          "*Interactive Experience*: Integrated *FullCalendar* for schedule sync, *MapLibre & Leaflet* for geolocation PT discovery, and *Socket.IO* for instant messaging."
        ],
        "DevOps & Security": [
          "*Protocol Security*: Enforced *JWT HttpOnly cookie verification at Socket.IO handshake* ➔ Closed unauthorized WebSocket room access and prevented sender impersonation.",
          "*Container Optimization*: Crafted *multi-stage Dockerfiles* (Nginx SPA + non-root Node Alpine) ➔ Streamlined production images down to *~100MB (FE)* and *~375MB (BE)*.",
          "*Automated CI Pipeline*: Orchestrated *Azure DevOps Pipeline + Vitest* on self-hosted runner ➔ Validated lint, unit tests, Babel transpilation, and Docker packaging in *~1m 07s*."
        ]
      },
      body: [],
      repos: [
        { label: "Frontend Repo", url: "https://github.com/nguyentuanminh0763/fitlink-portal" },
        { label: "Backend Repo", url: "https://github.com/nguyentuanminh0763/fitlink-api" }
      ],
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
};
