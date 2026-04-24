import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { socialLinks, personalInfo ,emaildata} from "../data/data";
import SocialIcon from "./SocialIcon";

// --------------------------------------------------
// Contact Component
// - Left: quote + social links list
// - Right: contact form
// --------------------------------------------------

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        emaildata.serviceId, // EmailJS service ID
        emaildata.templateId, // EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        emaildata.publicKey, // EmailJS public key
      )
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Message send nahi hua — dobara try karo!");
      });
  }

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-label">Get In Touch</div>

        <Row className="g-5">
          {/* Left: Quote + Social Links */}
          <Col md={6}>
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.7rem",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--cream)",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
              }}
            >
              "Let's build something worth remembering."
            </blockquote>

            <p style={{ marginBottom: "2.5rem", fontSize: "0.9rem" }}>
              Open to freelance projects, job opportunities, and collaborations.
              Based in Sahiwal, Pakistan — working globally.
            </p>

            {/* Social Links */}
            <div>
              {socialLinks.map((link) => (
                <SocialRow key={link.name} link={link} />
              ))}
            </div>
          </Col>

          {/* Right: Form */}
          <Col md={6}>
            <ContactForm
              form={form}
              sent={sent}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

// Single social link row
function SocialRow({ link }) {
  return (
    <a href={link.url} className="soc-row" target="_blank" rel="noreferrer">
      <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <div className="soc-icon-box" style={{ color: "var(--cream3)" }}>
          <SocialIcon name={link.icon} />
        </div>
        <div>
          <div className="soc-name">{link.name}</div>
          <div className="soc-handle">{link.handle}</div>
        </div>
      </div>
      <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        &#8594;
      </span>
    </a>
  );
}

// Contact form
function ContactForm({ form, sent, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="cf-group">
        <label className="cf-label">Full Name</label>
        <input
          className="cf-input"
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>

      <div className="cf-group">
        <label className="cf-label">Email Address</label>
        <input
          className="cf-input"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="cf-group">
        <label className="cf-label">Message</label>
        <textarea
          className="cf-input"
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={onChange}
          required
        />
      </div>

      <button
        type="submit"
        className="btn-warm"
        style={{ marginTop: "0.5rem" }}
      >
        {sent ? "Message Sent!" : "Send Message"}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M1 6l9-4-4 9-1.5-3.5L1 6z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

export default Contact;
