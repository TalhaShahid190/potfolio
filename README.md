# Talha Shahid — Portfolio

FarmMinerals-style dark/warm portfolio built with React + Bootstrap.

---

## Setup karna

```bash
# 1. Dependencies install karo
npm install

# 2. Local run karo
npm start

# 3. Build karo deploy ke liye
npm run build
```

---

## Files Structure

```
src/
  context/
    ThemeContext.js    ← Dark/Light mode control
  data/
    data.js            ← SAARA DATA YAHAN — naam, skills, projects, links
  components/
    Navbar.jsx         ← Nav + theme toggle button
    Hero.jsx           ← Big heading + particle animation + buttons
    TechBand.jsx       ← Scrolling tech marquee
    About.jsx          ← About me + stats grid
    Skills.jsx         ← Skills with dot indicators
    Projects.jsx       ← Featured + other projects
    SocialIcon.jsx     ← SVG icons for social links
    Contact.jsx        ← Social links + contact form
    Footer.jsx         ← Footer
  App.js               ← Sab components assemble
  App.css              ← Saare colors + styles
```

---

## Cheezain change karna

### Apna naam/info:
`src/data/data.js` mein `personalInfo` object edit karo

### Skills:
`src/data/data.js` mein `skills` array mein apni skills add/edit karo

### Projects:
`src/data/data.js` mein `projects` array update karo

### Social Links:
`src/data/data.js` mein `socialLinks` ka url aur handle badlo

### Colors (theme):
`src/App.css` mein upar `body.dark` aur `body.light` CSS variables badlo

---

## Deploy on Vercel

```bash
npm run build
# Vercel pe drag & drop karo build/ folder
# Ya: vercel deploy
```
"# potfolio" 
