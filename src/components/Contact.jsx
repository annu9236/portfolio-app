export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>

      <p className="section-para">
        Feel free to reach out to me for collaboration, projects, or any queries.
      </p>

      <div className="contact-info">
        <p>
          <strong>📧 Email:</strong>{' '}
          <a href="mailto:annudiploma2024@gmail.com" className="contact-link">
            annudiploma2024@gmail.com
          </a>
        </p>

        <p>
          <strong>🐙 GitHub:</strong>{' '}
          <a 
            href="https://github.com/annu9236" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/annu9236
          </a>
        </p>

        <p>
          <strong>🔗 LinkedIn:</strong>{' '}
          <a 
            href="https://linkedin.com/in/annu-vishwakarma-2413b9380" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/annu-vishwakarma-2413b9380
          </a>
        </p>

        <p>
          <strong>📞 Contact No:</strong>{' '}
          <a href="tel:+919236993428" className="contact-link">
            +91 9236993428
          </a>
        </p>
      </div>
    </section>
  );
}