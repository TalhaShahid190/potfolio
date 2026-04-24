import { personalInfo } from "../data/data";

// --------------------------------------------------
// Footer Component
// - Brand name left
// - Info center
// - Available status right
// --------------------------------------------------

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div
        className="d-flex flex-wrap justify-content-between align-items-center gap-3"
        style={{ maxWidth: 960, margin: "0 auto" }}
      >
        <div className="footer-brand">Talha Shahid</div>

        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          BSCS &mdash; COMSATS Sahiwal &mdash; {year}
        </div>

        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "var(--muted)",
          }}
        >
          {personalInfo.available ? "Available for work" : "Currently unavailable"}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
