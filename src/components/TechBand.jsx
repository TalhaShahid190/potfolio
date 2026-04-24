import { techBand } from "../data/data";

// --------------------------------------------------
// TechBand Component
// - Continuously scrolling marquee
// - Shows all tech stack items
// --------------------------------------------------

function TechBand() {
  // Double the array so marquee loops seamlessly
  const doubled = [...techBand, ...techBand];

  return (
    <div className="band-wrap">
      <div className="band-inner">
        {doubled.map((item, i) => (
          <span className="band-item" key={i}>
            <span className="band-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechBand;
