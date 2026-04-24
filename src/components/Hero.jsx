import { useEffect, useRef } from "react";
import { personalInfo } from "../data/data";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let pts = [];

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      pts = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.4,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(184,168,130,0.4)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(184,168,130,${0.08 * (1 - d / 80)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

function handleCVDownload(e) {
  e.preventDefault();
  const a = document.createElement("a");
  a.href = "cv.pdf";
  a.download = "cv.pdf";
  a.click();
}
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes pulseBorder {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 1; }
        }
        @keyframes spinRing {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50%       { opacity: 1;   transform: scaleY(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        @keyframes greenPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }
        .hero-img-wrap:hover .hero-photo {
          filter: grayscale(0%) contrast(1.08) !important;
          transform: scale(1.025) !important;
        }
        .hero-photo {
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        .hero-btn {
          transition: all 0.2s ease !important;
          text-decoration: none !important;
        }
        .hero-btn:hover {
          opacity: 0.82;
          transform: translateY(-2px) !important;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left {
            padding: 4rem 1.2rem 3rem !important;
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
          }
          .hero-right { min-height: 400px; padding: 2rem 1.2rem !important; }
          .hero-photo { width: 220px !important; height: 320px !important; }
        }
      `}</style>

      <section
        className="hero-grid"
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
          backgroundColor: "var(--bg)",
        }}
      >
        {/* Canvas */}
        <canvas ref={canvasRef} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          opacity: 0.18, pointerEvents: "none", zIndex: 0,
        }} />

        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          pointerEvents: "none", zIndex: 0,
          backgroundImage: "linear-gradient(var(--warm) 1px,transparent 1px),linear-gradient(90deg,var(--warm) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* ====== LEFT — Text Content ====== */}
        <div
          className="hero-left"
          style={{
            position: "relative", zIndex: 2,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "5rem 2.5rem 4.5rem",
            borderRight: "1px solid var(--line)",
          }}
        >
          {/* Eyebrow */}
          <div style={{
            fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--warm)", marginBottom: "1.5rem",
            display: "flex", alignItems: "center", gap: 14,
            animation: "fadeUp 0.7s ease both", animationDelay: "0.1s",
          }}>
            <span style={{ width: 32, height: 1, background: "var(--warm)", display: "block" }} />
            {personalInfo.title}
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.8rem, 7vw, 7rem)",
            fontWeight: 900, lineHeight: 0.93,
            color: "var(--cream)", marginBottom: "2rem",
            animation: "fadeUp 0.8s ease both", animationDelay: "0.2s",
          }}>
            Talha<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--warm)" }}>
              Shahid.
            </em>
          </h1>

          {/* Description */}
          <p style={{
            maxWidth: 360, fontSize: "0.9rem", marginBottom: "2rem",
            animation: "fadeUp 0.8s ease both", animationDelay: "0.35s",
          }}>
            {personalInfo.subtitle}
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", gap: "0.65rem",
            animation: "fadeUp 0.8s ease both", animationDelay: "0.5s",
          }}>
            <a href="#projects" className="hero-btn" style={btnWarm}>
              View Work <ArrowIcon />
            </a>
            <a href="#contact" className="hero-btn" style={btnOutline}>
              Get In Touch
            </a>
            <a href="#" className="hero-btn" style={btnGhost} onClick={handleCVDownload}>
              <DownloadIcon /> Download CV
            </a>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "2rem", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          }}>
            <div style={{
              width: 1, height: 48,
              background: "linear-gradient(to bottom, transparent, var(--warm))",
              animation: "scrollBounce 2s ease-in-out infinite",
            }} />
            <span style={{
              fontSize: "0.6rem", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--muted)",
            }}>
              Scroll
            </span>
          </div>
        </div>

        {/* ====== RIGHT — Big Image ====== */}
        <div
          className="hero-right"
          style={{
            position: "relative", zIndex: 2,
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            padding: "3rem 2.5rem 0", overflow: "hidden",
            animation: "fadeLeft 0.9s ease both", animationDelay: "0.3s",
          }}
        >
          {/* Glow circle */}
          <div style={{
            position: "absolute", width: 420, height: 420, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(184,168,130,0.07) 0%, transparent 70%)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />

          {/* Ring 1 */}
          <div style={{
            position: "absolute", width: 390, height: 390, borderRadius: "50%",
            border: "1px dashed rgba(184,168,130,0.14)",
            top: "50%", left: "50%",
            animation: "spinRing 22s linear infinite",
            pointerEvents: "none",
          }} />

          {/* Ring 2 */}
          <div style={{
            position: "absolute", width: 300, height: 300, borderRadius: "50%",
            border: "1px dashed rgba(184,168,130,0.08)",
            top: "50%", left: "50%",
            animation: "spinRing 16s linear infinite reverse",
            pointerEvents: "none",
          }} />

          {/* Image wrapper */}
          <div className="hero-img-wrap" style={{
            position: "relative",
            animation: "floatImg 5s ease-in-out infinite",
            cursor: "pointer",
          }}>
            {/* Corner top-left */}
            <div style={{
              position: "absolute", top: -12, left: -12, width: 55, height: 55,
              borderTop: "1.5px solid var(--warm)", borderLeft: "1.5px solid var(--warm)",
              animation: "pulseBorder 3s ease-in-out infinite", zIndex: 3,
            }} />

            {/* Corner bottom-right */}
            <div style={{
              position: "absolute", bottom: -12, right: -12, width: 55, height: 55,
              borderBottom: "1.5px solid var(--warm)", borderRight: "1.5px solid var(--warm)",
              animation: "pulseBorder 3s ease-in-out infinite",
              animationDelay: "1.5s", zIndex: 3,
            }} />

            {/* Corner top-right subtle */}
            <div style={{
              position: "absolute", top: -12, right: -12, width: 30, height: 30,
              borderTop: "1px solid rgba(184,168,130,0.3)",
              borderRight: "1px solid rgba(184,168,130,0.3)", zIndex: 3,
            }} />

            {/* PHOTO — src yahan apni path dalo */}
            <img
              className="hero-photo"
              src="/img/img.jpeg"
              alt="Talha Shahid"
              style={{
                width: "320px",
                height: "480px",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                filter: "grayscale(20%) contrast(1.05)",
                border: "1px solid var(--line2)",
              }}
            />

            {/* Shimmer */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(105deg, transparent 40%, rgba(184,168,130,0.07) 50%, transparent 60%)",
              backgroundSize: "600px 100%",
              animation: "shimmer 4s ease-in-out infinite",
              pointerEvents: "none",
            }} />

            {/* Available badge */}
            <div style={{
              position: "absolute", bottom: 24, left: -28,
              background: "var(--bg2)", border: "1px solid var(--line2)",
              padding: "0.5rem 1rem",
              display: "flex", alignItems: "center", gap: 8, zIndex: 4,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#4ade80", display: "inline-block",
                animation: "greenPulse 1.8s ease-in-out infinite",
              }} />
              <span style={{
                fontSize: "0.68rem", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--cream2)",
              }}>
                Available for Work
              </span>
            </div>

            {/* MERN Stack tag */}
            <div style={{
              position: "absolute", top: 20, right: -20,
              background: "var(--bg2)", border: "1px solid var(--line2)",
              padding: "0.4rem 0.8rem", zIndex: 4,
            }}>
              <span style={{
                fontSize: "0.65rem", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--warm)",
              }}>
                MERN Stack
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const btnWarm = {
  background: "var(--warm)", color: "var(--bg)", border: "none",
  padding: "0.75rem 2rem", fontSize: "0.75rem", letterSpacing: "0.14em",
  textTransform: "uppercase", fontFamily: "'Inter', sans-serif",
  cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
};
const btnOutline = {
  background: "transparent", color: "var(--cream2)", border: "1px solid var(--line2)",
  padding: "0.75rem 2rem", fontSize: "0.75rem", letterSpacing: "0.14em",
  textTransform: "uppercase", fontFamily: "'Inter', sans-serif",
  cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
};
const btnGhost = {
  background: "transparent", color: "var(--cream3)", border: "1px solid var(--line)",
  padding: "0.75rem 2rem", fontSize: "0.75rem", letterSpacing: "0.14em",
  textTransform: "uppercase", fontFamily: "'Inter', sans-serif",
  cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v7M3 6l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Hero;
