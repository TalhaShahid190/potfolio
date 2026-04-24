// --------------------------------------------------
// data.js — Yahan apna saara data edit karo
// Naam, skills, projects, social links — sab yahan
// --------------------------------------------------

export const personalInfo = {
  name: "Talha Shahid",
  nameItalic: "Shahid.",
  title: "Full Stack Developer & Builder",
  subtitle:
    "BSCS student at COMSATS Sahiwal. I build production-ready web applications — from crypto platforms to e-commerce stores that serve real users.",
  location: "Sahiwal, Pakistan",
  email: "talhabaigshahidali59@gmail.com",
  available: true,
  cvFile: "./public/Talha ShahidC V.pdf", // apna CV yahan rakh do public folder mein
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { number: "3+", label: "Production Projects" },
  { number: "2+", label: "Years Experience" },
  { number: "VPS", label: "Live Deployments" },
  { number: "MERN", label: "Core Stack" },
];

export const aboutText = [
  "I'm a <strong>Computer Science student</strong> at COMSATS University Islamabad, Sahiwal Campus. My focus is on building full-stack web applications that go beyond the classroom — real deployments, real users, real impact.",
  "My core expertise is the <strong>MERN stack</strong>. I've deployed production apps on Linux VPS servers with Nginx, SSL certificates, and PM2 process management.",
];

export const skills = [
  { name: "React.js", level: "Advanced", dots: 5 },
  { name: "Node.js", level: "Advanced", dots: 5 },
  { name: "MongoDB", level: "Advanced", dots: 4 },
  { name: "Express.js", level: "Advanced", dots: 5 },
  { name: "Tailwind CSS", level: "Advanced", dots: 4 },
  { name: "Linux / Nginx", level: "Intermediate", dots: 3 },
  { name: "Java / OOP", level: "Intermediate", dots: 3 },
  { name: "Git / GitHub", level: "Advanced", dots: 4 },
  { name: "SQL / Oracle", level: "Intermediate", dots: 3 },
];

export const techBand = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "VPS Deployment",
  "Laravel",
  "Tailwind CSS",
  "Git & GitHub",
  "Nginx + SSL",
  "Java OOP",
];

export const projects = [
  {
    id: "01",
    name: "ZAVE — E-Commerce Store",
    desc: "Natural hair oil brand with full shopping flow, admin panel, and MongoDB Atlas backend.",
    tags: ["React", "tailwind", "json-server"],
    liveUrl: "https://gilded-pudding-6cd3fd.netlify.app/",
    githubUrl: "#",
    isLive: true,
    featured: false,
  },
  {
    id: "02",
    name: "GWC — Global Wealth Community",
    desc: "A full-stack crypto staking and multi-level referral platform. Real users, real transactions. Deployed on Contabo VPS with Nginx, SSL, and PM2. Complete admin panel with reward distribution logic.",
    tags: ["React", "Node.js", "MongoDB", "VPS"],
    liveUrl: "https://gwcorg.com",
    githubUrl: "#",
    isLive: true,
    featured: false,
  },
  {
    id: "03",
    name: "School Management System (COMING SOON)",
    desc: "Student CRUD, fee tracking, attendance, and JWT authentication. Deployed on Render + Vercel.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    isLive: false,
    featured: true,
  },
];

export const socialLinks = [
  {
    name: "WhatsApp",
    handle: "+92 3177738429", // <-- apna number yahan
    url: "https://wa.me/923177738429",
    icon: "whatsapp",
  },
  {
    name: "Instagram",
    handle: "@talubaig", // <-- apna handle
    url: "https://www.instagram.com/talubaig/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    handle: "Talha Shahid",
    url: "https://www.linkedin.com/in/talha-shahid-a9474b375/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    handle: "talha-shahid",
    url: "https://github.com/TalhaShahid190",
    icon: "github",
  },
  {
    name: "Email",
    handle: "talhabaigshahidali59@gmail.com",
    url: "mailto:talhabaigshahidali59@gmail.com",
    icon: "email",
  },
];
