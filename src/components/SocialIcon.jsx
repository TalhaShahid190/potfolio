// --------------------------------------------------
// SocialIcon Component
// - Har platform ka alag SVG icon
// - Sirf name pass karo, icon aa jaye ga
// --------------------------------------------------

function SocialIcon({ name }) {
  const s = { width: 14, height: 14, fill: "none" };

  if (name === "whatsapp")
    return (
      <svg {...s} viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
        <path d="M4.5 5.8c.4 1.2 1.6 2.4 2.8 2.8l.8-.8c.2-.2.5-.2.7 0l1.2.8c.2.2.2.5 0 .7-.8.8-2.4 1.2-4.4-.4S3.7 6.1 4.5 5.8z" fill="currentColor" />
      </svg>
    );

  if (name === "instagram")
    return (
      <svg {...s} viewBox="0 0 14 14">
        <rect x="2" y="2" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="10.2" cy="3.8" r=".7" fill="currentColor" />
      </svg>
    );

  if (name === "linkedin")
    return (
      <svg {...s} viewBox="0 0 14 14">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M4 6v4M4 4.5v.2M6.5 10V8c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2M6.5 6v4"
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );

  if (name === "github")
    return (
      <svg {...s} viewBox="0 0 14 14">
        <path d="M7 1C3.96 1 1.5 3.46 1.5 6.5c0 2.43 1.58 4.49 3.76 5.22.28.05.38-.12.38-.27v-.93C4.08 10.88 3.73 9.9 3.73 9.9c-.25-.64-.62-.81-.62-.81-.5-.34.04-.33.04-.33.56.04.85.57.85.57.5.85 1.3.6 1.61.46.05-.36.19-.6.35-.74C4.73 8.8 3.48 8.35 3.48 6.35c0-.6.21-1.09.57-1.48-.06-.14-.25-.7.05-1.46 0 0 .47-.15 1.53.57A5.3 5.3 0 017 3.73c.47 0 .95.06 1.39.18 1.06-.72 1.53-.57 1.53-.57.3.76.11 1.32.05 1.46.36.39.57.88.57 1.48 0 2.01-1.26 2.45-2.46 2.58.19.17.37.49.37 1v1.48c0 .14.09.31.38.26A5.5 5.5 0 0012.5 6.5C12.5 3.46 10.04 1 7 1z"
          fill="currentColor" />
      </svg>
    );

  if (name === "email")
    return (
      <svg {...s} viewBox="0 0 14 14">
        <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" />
        <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1" />
      </svg>
    );

  return null;
}

export default SocialIcon;
