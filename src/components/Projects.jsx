import { Row, Col } from "react-bootstrap";
import { projects } from "../data/data";

// --------------------------------------------------
// Projects Component
// - Featured project spans full width
// - Other projects in 2-column grid
// --------------------------------------------------

function Projects() {
  const featured = projects.find((p) => p.featured);

  const rest = projects.filter((p) => p.id !== featured?.id);

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">
          Featured <em>Projects</em>
        </h2>

        {/* Featured (full width) */}
        {featured && (
          <div style={{ marginBottom: "1px" }}>
            <FeaturedCard project={featured} />
          </div>
        )}

        {/* Rest (2 columns) */}
        <Row className="g-0" style={{ marginTop: "1px" }}>
          {rest.map((project) => (
            <Col md={6} key={project.id}>
              <SmallCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

// Big featured card
function FeaturedCard({ project }) {
  return (
    <div className="proj-card">
      <Row className="align-items-center g-4">
        <Col md={7}>
          <div className="proj-number"></div>
          <div style={{ marginBottom: "0.75rem" }}>
            {project.tags.map((tag) => (
              <span className="proj-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="proj-name">{project.name}</div>
          <p
            className="proj-desc"
            style={{ marginTop: "0.6rem", marginBottom: "1.5rem" }}
          >
            {project.desc}
          </p>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            {project.isLive && (
              <span className="live-badge">Live Production</span>
            )}
            <div className="d-flex gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  className="proj-link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.liveUrl.replace("https://", "")} <ExternalIcon />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="proj-link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        </Col>
        <Col md={5} className="d-none d-md-flex justify-content-center">
          <HexIcon />
        </Col>
      </Row>
    </div>
  );
}

// Smaller project cards
function SmallCard({ project }) {
  return (
    <div className="proj-card" style={{ height: "100%" }}>
      <div className="proj-number" style={{ fontSize: "3rem" }}></div>
      <div style={{ marginBottom: "0.75rem" }}>
        {project.tags.map((tag) => (
          <span className="proj-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="proj-name">{project.name}</div>
      <p
        className="proj-desc"
        style={{ marginTop: "0.5rem", marginBottom: "1.2rem" }}
      >
        {project.desc}
      </p>
      <div className="d-flex gap-3 flex-wrap" style={{ marginTop: "auto" }}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="proj-link-btn"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo <ExternalIcon />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="proj-link-btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalIcon />
          </a>
        )}
      </div>
    </div>
  );
}

// Decorative hex SVG for featured card
function HexIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <polygon
        points="60,8 104,32 104,80 60,104 16,80 16,32"
        fill="none"
        stroke="var(--warm)"
        strokeWidth="1"
        opacity="0.4"
      />
      <polygon
        points="60,20 90,37 90,71 60,88 30,71 30,37"
        fill="rgba(184,168,130,0.05)"
        stroke="var(--warm)"
        strokeWidth="0.6"
        strokeDasharray="4 5"
        opacity="0.5"
      />
      <circle
        cx="60"
        cy="60"
        r="18"
        fill="rgba(184,168,130,0.08)"
        stroke="var(--warm)"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M52 60l6 6 10-12"
        stroke="var(--warm)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 8L8 2M4 2h4v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Projects;
