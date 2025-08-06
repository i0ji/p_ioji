const heroData: Array<heroModel> = [
  {
    title: "System Administrator => DevOps engineer => Head of IT department",
    period: "2023 - present",
    responsibilities: [
      "Migrated, configured, and maintained on-premises and cloud servers/services: successfully migrated and configured 30+ services across 3 resource pools.",
      "Implemented and managed corporate Yandex Tracker for ticket/request tracking",
      "Administered hybrid infrastructure (on-premises and cloud environments)",
      "Maintained corporate website operations",
      "Contributed to the development of an internal web portal for employees",
    ],
    technologies: [
      "Zabbix",
      "Portainer/Docker",
      "1S",
      "Hyper-V",
      "VMware",
      "Active Directory",
      "Network equipment",
      "PBX/3CX",
      "Multifactor",
      "Yandex Cloud (YDS)",
      "Yandex 360",
      "Alta-Soft",
    ],
  },
  {
    title: "Personal website for designer",
    period: "2024 - present",
    responsibilities: [
      "Developed a full-featured application independently, managing all stages from client communication and design approval to deployment and maintenance",
      "Deployed the application on REG.RU hosting and configured SSL certification",
      "Set up indexing in Yandex and Google, integrated Yandex.Metrika and Webmaster tools; utilized Google PageSpeed and Google Search Console",
      "Optimized the application to improve performance and user experience",
      "Continuously maintain the application: adding content, updating information, and handling migration to Next.js",
      "Collect and analyze user feedback on the application’s performance and UX",
    ],
    technologies: [
      "Next.JS/React",
      "TS/JS",
      "SASS",
      "vite",
      "webpack",
      "Redux/RTK",
      "Jest/Cypress",
      "YDS",
    ],
  },
  {
    title: "Stellar Burger Project",
    period: "2024",
    responsibilities: [
      "Implemented user authentication and authorization: developed a secure login and authentication system using JWT tokens, including password recovery and token refresh functionality",
      "Created a shopping cart for order processing with Drag and Drop functionality and component reordering",
      "Integrated a real-time orders feed using WebSocket, supporting both a public feed and personalized feed for authenticated users",
      "Conducted comprehensive testing with Jest and Cypress, covering over 70 units: pages, components, functions, APIs, and middleware",
    ],
    technologies: [
      "React",
      "TS",
      "RTK",
      "DnD",
      "SASS",
      "WebScoket",
      "Jest/Cypress",
      "vite",
    ],
  },
];

const aboutData: Array<aboutModel> = [
  {
    title: "Hello!",
    description:
      "I began my programming journey with the fundamentals of JavaScript, HTML, and CSS, gradually incorporating new technologies and best practices along the way. My learning roadmap includes Webpack, BEM methodology, GitHub, Git-flow, GitVerse, SASS, TypeScript, npm, Yarn, pnpm, Vite, and eventually React and Next.js. I have also worked with Redux Toolkit, WebSocket, Jest, and Cypress for testing. Additionally, I have experience working with Angular.",
  },
];

export { aboutData, heroData };
