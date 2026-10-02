export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Here are some of my recent projects that showcase my skills
      </p>

      <div className="projects-grid">

        {/* Personal Finance & Budget Management System */}
        <div className="project-card">
          <h3>SpendWise - Personal Finance & Budget Management System</h3>
          <p>
            A database-driven web application for managing personal finances,
            including income, expenses, categories, budgets, and financial
            summaries. Built with secure authentication, role-based access,
            and structured database operations.
          </p>

          <div className="project-tech">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links-group">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links live-demo"
            >
              Live Demo
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Student Management System */}
        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            A web-based student management application built to manage student
            records efficiently. Includes user authentication and complete CRUD
            operations for adding, viewing, updating, and deleting student data.
          </p>

          <div className="project-tech">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links-group">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links live-demo"
            >
              Live Demo
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* EmergencyLens */}
        <div className="project-card">
          <h3>EmergencyLens</h3>
          <p>
            A real-time emergency guidance system providing step-by-step
            instructions for fire, accidents, medical crises, crimes, natural
            disasters, and other emergency situations, with instant call
            support.
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
              Live Demo
            </a>

            <a
              href="https://github.com/annu9236/emergency-lens"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links github-link"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}