export default function Skills() {
  const skills = {
    backend: [
      "PHP",
      "Laravel",
      "REST APIs"
    ],

    database: [
      "MySQL",
      "Database Relationships",
      "Eloquent ORM"
    ],

    frontend: [
      "JavaScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ],

    authentication: [
      "Authentication",
      "Authorization",
      "Middleware",
      "Session Management"
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman"
    ],

    others: [
      "Problem Solving",
      "Fast Typing"
    ]
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <p className="section-subtitle">
        Technologies, frameworks, and tools I work with
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