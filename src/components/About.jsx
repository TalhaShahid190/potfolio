import { Row, Col } from "react-bootstrap";
import { aboutText, stats } from "../data/data";

// --------------------------------------------------
// About Component
// - Left: paragraphs about Talha
// - Right: 2x2 stats grid
// --------------------------------------------------

function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        {/* Label */}
        <div className="section-label">Who I Am</div>

        {/* Title */}
        <h2 className="section-title">
          Building Real Products,
          <br />
          <em>Not Just Code.</em>
        </h2>

        {/* Content Grid */}
        <Row className="g-5 align-items-center">
          {/* Left: Text */}
          <Col md={6}>
            {aboutText.map((para, i) => (
              <p
                key={i}
                style={{ marginBottom: "1.1rem", fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </Col>

          {/* Right: Stats */}
          <Col md={6}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "var(--line2)",
                border: "1px solid var(--line2)",
              }}
            >
              {stats.map((stat) => (
                <StatBox key={stat.label} number={stat.number} label={stat.label} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

// Single stat box
function StatBox({ number, label }) {
  return (
    <div className="stat-box">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default About;
