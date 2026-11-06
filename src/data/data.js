// --------------------------------------------------
// data.js — Talha Shahid Portfolio
// Edit all portfolio content from this file.
// --------------------------------------------------

export const personalInfo = {
  name: "Talha Shahid",
  nameItalic: "Shahid.",
  title: "Full Stack Developer & MERN Stack Intern",
  subtitle:
    "BSCS student at COMSATS Sahiwal. I build full-stack web applications, REST APIs, database-driven systems, and real-world digital solutions using the MERN stack.",
  location: "Sahiwal, Pakistan",
  email: "talhabaigshahidali59@gmail.com",
  available: true,
  cvFile: "/Talha Shahid CV.pdf",
};

// EmailJS Configuration
export const emaildata = {
  serviceId: "service_vcj665f",
  templateId: "template_lngf34q",
  publicKey: "hjMpLLYtLgIMINvZ4",
};

// Navigation
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Portfolio Statistics
export const stats = [
  { number: "3rd", label: "University Semester" },
  { number: "6+", label: "Projects Built" },
  { number: "MERN", label: "Core Technology Stack" },
  { number: "VPS", label: "Deployment Experience" },
];

// About Section
export const aboutText = [
  "I'm a <strong>Computer Science student</strong> at COMSATS University Islamabad, Sahiwal Campus, currently in my 3rd semester. I enjoy transforming ideas into functional applications and solving real-world problems through technology.",

  "I'm primarily focused on the <strong>MERN Stack (MongoDB, Express.js, React.js, and Node.js)</strong>. I have hands-on experience building full-stack applications, REST APIs, authentication systems, admin dashboards, and database-driven solutions.",

  "I'm currently working as a <strong>MERN Stack Intern</strong>, gaining practical development experience. I've also worked with Linux VPS deployment, Nginx, PM2, SSL certificates, Git, and GitHub.",

  "My goal is to become a skilled software engineer, build scalable digital products, and continuously explore modern technologies.",
];

// Technical Skills
export const skills = [
  { name: "HTML5", level: "Advanced", dots: 5 },
  { name: "CSS3", level: "Advanced", dots: 5 },
  { name: "JavaScript", level: "Intermediate", dots: 4 },
  { name: "React.js", level: "Advanced", dots: 5 },
  { name: "Node.js", level: "Intermediate", dots: 4 },
  { name: "Express.js", level: "Intermediate", dots: 4 },
  { name: "MongoDB", level: "Intermediate", dots: 4 },
  { name: "Mongoose", level: "Intermediate", dots: 4 },
  { name: "Tailwind CSS", level: "Advanced", dots: 4 },
  { name: "Bootstrap", level: "Intermediate", dots: 4 },
  { name: "REST APIs", level: "Intermediate", dots: 4 },
  { name: "JSON Server", level: "Intermediate", dots: 3 },
  { name: "Git & GitHub", level: "Intermediate", dots: 4 },
  { name: "Java / OOP", level: "Intermediate", dots: 3 },
  { name: "C++", level: "Learning", dots: 3 },
  { name: "Linux / VPS", level: "Intermediate", dots: 3 },
  { name: "Nginx / PM2", level: "Intermediate", dots: 3 },
];

// Technologies Currently Learning
export const currentlyLearning = [
  "React Native",
  "Flutter",
  "DevOps",
  "Cloud Infrastructure",
];

// Technology Marquee / Tech Band
export const techBand = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "JSON Server",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "Git & GitHub",
  "Linux",
  "Nginx",
  "PM2",
  "VPS Deployment",
];

// Projects
export const projects = [
  {
    id: "01",
    name: "Jeevan City — Real Estate Management System",
    desc: "A real estate management system currently under development. Includes modules for seller management, land management, phase management, plot management, payment management, and role-based administration.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    liveUrl: "https://nds.marketing/login",
    githubUrl: "",
    isLive: true,
    featured: true,
  },

  {
    id: "02",
    name: "ZAVE — E-Commerce Store",
    desc: "An e-commerce website for a natural hair oil brand. Features product browsing, shopping functionality, and an admin panel. Uses JSON Server for backend data handling.",
    tags: ["React", "Tailwind CSS", "JSON Server"],
    liveUrl: "https://zave-hair-oil.netlify.app/",
    githubUrl: "https://github.com/TalhaShahid190/Zave",
    isLive: true,
    featured: false,
  },

  {
    id: "03",
    name: "GWC — Global Wealth Community",
    desc: "A full-stack crypto staking and referral platform featuring user dashboards, admin panel, backend APIs, and reward distribution logic. Worked across frontend and backend development and deployment using Contabo VPS, Nginx, SSL, and PM2.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "VPS"],
    liveUrl: "https://gwcoffical.netlify.app/",
    githubUrl: "https://github.com/TalhaShahid190/gwc-frontend",
    isLive: true,
    featured: false,
  },

  {
    id: "04",
    name: "School Management System",
    desc: "A school management application focused on student CRUD operations, fee tracking, attendance management, and JWT authentication.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://school-mangment-by-talha.netlify.app/",
    githubUrl: "https://github.com/TalhaShahid190/school-mangement",
    isLive: true,
    featured: false,
  },

  {
    id: "05",
    name: "Gallery App",
    desc: "A responsive image gallery built with React and Tailwind CSS. Fetches images through an API and displays them in a responsive grid layout.",
    tags: ["React", "Tailwind CSS", "REST API"],
    liveUrl: "https://gallaryoftalha.netlify.app/",
    githubUrl: "https://github.com/TalhaShahid190/pic-gallary",
    isLive: true,
    featured: false,
  },

  {
    id: "06",
    name: "Notepad App",
    desc: "A simple note-taking application that allows users to create, edit, and delete notes using browser local storage.",
    tags: ["React", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://notepad-by-talha.netlify.app/",
    githubUrl: "https://github.com/TalhaShahid190/notepad",
    isLive: true,
    featured: false,
  },
];

// Social Media Links
export const socialLinks = [
  {
    name: "WhatsApp",
    handle: "+92 3177738429",
    url: "https://wa.me/923177738429",
    icon: "whatsapp",
  },

  {
    name: "Instagram",
    handle: "@talubaig",
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
    handle: "TalhaShahid190",
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
