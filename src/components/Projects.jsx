export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">

        {/* Portfolio Website */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio built with React to showcase my skills, projects,
            and full-stack journey.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>CSS</span>
          </div>
          <div className="project-links-group">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links live-demo"
            >
              🔗 Live Demo →
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              📂 GitHub →
            </a>
          </div>
        </div>

        {/* EmergencyLens - IMPROVED */}
        <div className="project-card">
          <h3>EmergencyLens</h3>
          <p>
            A real-time emergency guidance system providing step-by-step instructions 
            for fire, accidents, medical crises, crimes, natural disasters, and more.
            Features 10+ emergency types with instant emergency call support.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Vite</span>
            <span>React Router</span>
            <span>CSS</span>
          </div>
          <div className="project-links-group">
            <a 
              href="https://emergency-lens-app.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links live-demo"
            >
              🔗 Live Demo →
            </a>
            <a 
              href="https://github.com/annu9236/emergency-lens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              📂 GitHub →
            </a>
          </div>
        </div>

        {/* Full Stack Web Application */}
        <div className="project-card">
          <h3>Full Stack Web Application</h3>
          <p>
            Complete web application using React for frontend, PHP for backend,
            and MySQL for database management.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>REST API</span>
          </div>
          <div className="project-links-group">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links live-demo"
            >
              🔗 Live Demo →
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              📂 GitHub →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}