import { useTheme } from "../context/ThemeContext";
import { navLinks, personalInfo } from "../data/data";

// --------------------------------------------------
// Navbar Component
// - Logo left side
// - Nav links middle
// - Hire Me button + Theme toggle right
// --------------------------------------------------

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.3rem 2.5rem",
        borderBottom: "1px solid var(--line2)",
        backgroundColor: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "background-color 0.4s",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--cream)",
          fontStyle: "italic",
          letterSpacing: "0.02em",
        }}
      >
        Talha
        <span
          style={{
            fontStyle: "normal",
            fontWeight: 300,
            color: "var(--cream3)",
            fontSize: "0.85rem",
            marginLeft: "4px",
          }}
        >
          Shahid
        </span>
      </div>

      {/* Nav Links — hide on mobile */}
      <ul
        className="d-none d-md-flex"
        style={{ listStyle: "none", gap: "2.5rem", margin: 0, padding: 0 }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: "var(--cream3)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--cream)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--cream3)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: Hire Me + Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        <a href="#contact" className="btn-warm d-none d-sm-inline-flex">
          Hire Me
        </a>

        {/* Dark/Light Toggle */}
        <div
          className="theme-toggle"
          onClick={toggleTheme}
          title={isDark ? "Switch to Light" : "Switch to Dark"}
        >
          <div className={`theme-knob ${isDark ? "" : "light"}`} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
