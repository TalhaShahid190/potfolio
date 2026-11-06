import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Components
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import TechBand  from "./components/TechBand";
import About     from "./components/About";
import Skills    from "./components/Skills";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

// --------------------------------------------------
// AppContent — applies dark/light class to body
// --------------------------------------------------
function AppContent() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechBand />

        <div className="divider" />
        <About />
        <div className="divider" />
        <Projects />

        <div className="divider" />
        <Skills />


        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

// --------------------------------------------------
// App — wraps everything in ThemeProvider
// --------------------------------------------------
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
