import { Row, Col } from "react-bootstrap";
import { skills } from "../data/data";

// --------------------------------------------------
// Skills Component
// - 2-column grid of skill rows
// - Each row: name | level | dot indicators
// --------------------------------------------------

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title">
          Skills &amp; <em>Technologies</em>
        </h2>

        {/* Skills Grid — 2 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
          }}
        >
          {skills.map((skill, i) => (
            <SkillRow key={skill.name} skill={skill} index={i} total={skills.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Single skill row
function SkillRow({ skill, index, total }) {
  const isOdd = index % 2 === 0;
  const isLastRow = index >= total - 2;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1.15rem 0",
        paddingRight: isOdd ? "2rem" : "0",
        paddingLeft: isOdd ? "0" : "2rem",
        borderBottom: isLastRow ? "none" : "1px solid var(--line)",
        borderRight: isOdd ? "1px solid var(--line)" : "none",
      }}
    >
      {/* Skill name */}
      <span style={{ fontSize: "0.88rem", color: "var(--cream)", fontWeight: 400, minWidth: 120 }}>
        {skill.name}
      </span>

      {/* Level + Dots */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {skill.level}
        </span>

        {/* 5 dots */}
        <div style={{ display: "flex", gap: "3px" }}>
          {[1, 2, 3, 4, 5].map((d) => (
            <span
              key={d}
              className={`skill-dot ${d <= skill.dots ? "active" : "inactive"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
