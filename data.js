/* ─────────────────────────────────────────────────────────────
   EDIT EVERYTHING HERE. No other file needs touching.
   *text between asterisks* renders as italic emphasis.
   Empty an array (e.g. articles: []) and that section disappears.
   ───────────────────────────────────────────────────────────── */

const DATA = {
  brand: ["Nguyen Tuan", "Minh"],
  role: ["Full-stack", "Developer"],
  tagline:
    "My goal is to *write maintainable, clean and understandable code* so the process of development stays enjoyable.",

  about: {
    intro:
      "Hello! I'm Minh, I'm a *full-stack developer* building scalable web applications with React, Spring Boot and Node.js.",
    photo: "https://avatars.githubusercontent.com/u/144188010?v=4",
  },

  socials: [
    { icon: "github", label: "Github", url: "https://github.com/nguyentuanminh0763" },
    { icon: "linkedin", label: "Linkedin", url: "https://www.linkedin.com/in/nguyentuanminh0763" },
    { icon: "mail", label: "E-mail", url: "mailto:minhnt0763@gmail.com" },
    { icon: "telegram", label: "Telegram", url: "https://t.me/nguyentuanminh0763" },
    { icon: "facebook", label: "Facebook", url: "https://facebook.com/nguyentuanminh0763" },
  ],

  // Rendered as staggered cards. Add/remove groups freely.
  skills: [
    {
      title: "Front-end",
      items: ["TypeScript", "React", "Next.js", "Vite", "Redux Toolkit", "React Native", "Expo"],
    },
    { title: "Styles", items: ["Tailwind CSS", "SASS", "MUI", "shadcn/ui"] },
    {
      title: "Back-end",
      items: ["Java", "Spring Boot", "Node.js", "NestJS", "Express", "PostgreSQL", "MySQL", "MongoDB", "RabbitMQ", "Microservices"],
    },
    { title: "DevOps & Tools", items: ["Docker", "Git", "CI/CD", "Nginx", "n8n", "Python"] },
  ],

  // Newest first. `to: ""` renders as "Present".
  work: [
    {
      from: "2025",
      to: "",
      length: "",
      company: "Freelance / Personal projects",
      role: "Full-stack developer",
      stack: "React & Spring Boot",
    },
    {
      from: "2024",
      to: "2025",
      length: "1 year",
      company: "Greeno Express (EXE project)",
      role: "Full-stack developer",
      stack: "JavaScript & Node.js",
    },
    {
      from: "2023",
      to: "2024",
      length: "1 year",
      company: "University projects",
      role: "Backend developer",
      stack: "Java",
    },
  ],
  workTotal: "3 years",

  /* Drop screenshots into images/ and list them here, e.g.
     images: ["images/foodhub-1.png", "images/foodhub-2.png"]
     Leave the array empty and a placeholder tile is drawn instead. */
  projects: [
    {
      name: "FoodHub",
      tags: ["Java", "Spring Boot", "Node.js", "Docker", "RabbitMQ", "PostgreSQL"],
      body: [
        "A *food-ordering and delivery platform* built on a microservices architecture — each service owns one business responsibility and one database.",
        "Services talk over a mix of *synchronous REST* and *asynchronous messaging*, with payment isolated and notifications handled off the request path.",
      ],
      url: "https://github.com/nguyentuanminh0763/foodhub-microservices",
      images: [],
    },
    {
      name: "SEO Automation",
      tags: ["Python", "Google Trends", "Scraping", "tkinter"],
      body: [
        "A *Python toolkit* that collects SEO keywords for the Vietnamese retail market — breakout trends weekly, and ~7,000 long-tail suggestions per quarter.",
        "Ships with a *desktop GUI* built on the standard library, so a non-technical operator can run it without a terminal.",
      ],
      url: "https://github.com/nguyentuanminh0763/seo-automation",
      images: [],
    },
    {
      name: "n8n Chatbot",
      tags: ["React", "Vite", "n8n", "OpenAI", "Docker"],
      body: [
        "A *minimal chat UI* wired to an n8n workflow, which handles the message pipeline and calls the OpenAI API.",
        "The whole automation layer runs *locally in Docker* — no backend service of my own to maintain.",
      ],
      url: "https://github.com/nguyentuanminh0763/n8n-chatbot",
      images: [],
    },
    {
      name: "FinanceStudent API",
      tags: ["NestJS", "TypeScript", "REST"],
      body: [
        "A *personal-finance backend* for students: budgets, spending categories and monthly reporting behind a typed REST API.",
      ],
      url: "https://github.com/nguyentuanminh0763/financestudent-backend",
      images: [],
    },
  ],

  /* Replace with your own posts, or set articles: [] to hide
     both the hero carousel and the Articles section. */
  articles: [
    {
      title: "Why I split FoodHub into microservices",
      excerpt:
        "Payment must be isolated, notifications are naturally async, and the catalog scales differently from orders. The split had to earn its complexity.",
      url: "https://github.com/nguyentuanminh0763/foodhub-microservices",
      cover: "",
    },
    {
      title: "Scraping Google Trends without getting blocked",
      excerpt:
        "Rate limits, session reuse and the difference between what Trends reports and what people actually search for.",
      url: "https://github.com/nguyentuanminh0763/seo-automation",
      cover: "",
    },
    {
      title: "A chatbot with no backend of my own",
      excerpt:
        "React talks to an n8n webhook, n8n talks to OpenAI. One Docker container replaces a service I would otherwise have to run.",
      url: "https://github.com/nguyentuanminh0763/n8n-chatbot",
      cover: "",
    },
    {
      title: "Spring Boot and Node.js in the same system",
      excerpt:
        "Picking the right runtime per service instead of per project, and what that costs you in tooling.",
      url: "https://github.com/nguyentuanminh0763/foodhub-microservices",
      cover: "",
    },
  ],

  footerNote: ["Handcrafted by ME /", "Designed after Taisia Tsyganok /", "Powered by vanilla JS"],
};
