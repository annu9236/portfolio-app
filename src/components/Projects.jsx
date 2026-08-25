export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Here are some of my recent projects that showcase my skills</p>
      <div className="projects-grid">

        {/* EmergencyLens */}
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
            <a href="https://emergency-lens-app.vercel.app/" target="_blank" rel="noopener noreferrer"className="project-links live-demo">Live Demo</a>
            <a href="https://github.com/annu9236/emergency-lens" target="_blank" rel="noopener noreferrer" className="project-links github-link">GitHub
            </a>
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal developer portfolio showcasing projects, technical skills, 
            and contact information. Built with React.js and Vite, deployed on 
            Vercel with CI/CD pipeline.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Vite</span>
            <span>CSS</span>
          </div>
          <div className="project-links-group">
            <a href="https://portfolio-app-alpha-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="project-links live-demo">Live Demo</a>
            <a href="https://github.com/annu9236/portfolio-app" target="_blank" rel="noopener noreferrer" className="project-links github-link">GitHub
            </a>
          </div>
        </div>

        {/* Full Stack Web Application
        <div className="project-card">
          <h3>Bus Ticket Booking System</h3>
          <p>
            A complete bus ticket booking web application built during summer training. 
            Features user authentication, seat selection, payment integration, 
            and ticket management system.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>REST API</span>
          </div>
          <div className="project-links-group">
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-links live-demo">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer"className="project-links github-link">GitHub</a>
          </div>
        </div> */}

      </div>
    </section>
  );
}