export default function Skills() {
  const skills = {
    frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Vite"],
    backend: ["PHP", "Laravel"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "REST API"],
    others: ["Fast Typing", "Problem Solving"]
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I work with
      </p>
      <div className="skill-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>
            <h4>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h4>
            <div className="skill-items">
              {items.map((item, index) => (
                <div className="skill-card" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}