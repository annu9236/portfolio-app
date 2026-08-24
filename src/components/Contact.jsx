import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">
        Feel free to reach out to me for collaboration, projects, or any queries
      </p>

      <div className="contact-info">
        <p>
          <strong>
            <FaEnvelope style={{ marginRight: '8px', color: '#38bdf8' }} />
            Email:
          </strong>
          <a href="mailto:annudiploma2024@gmail.com" className="contact-link">
            annudiploma2024@gmail.com
          </a>
        </p>

        <p>
          <strong>
            <FaPhone style={{ marginRight: '8px', color: '#38bdf8' }} />
            Phone:
          </strong>
          <a href="tel:+919236993428" className="contact-link">
            +91 9236993428
          </a>
        </p>

        <p>
          <strong>
            <FaGithub style={{ marginRight: '8px', color: '#38bdf8' }} />
            GitHub:
          </strong>
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
          <strong>
            <FaLinkedin style={{ marginRight: '8px', color: '#38bdf8' }} />
            LinkedIn:
          </strong>
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
          <strong>
            <FaMapMarkerAlt style={{ marginRight: '8px', color: '#38bdf8' }} />
            Location:
          </strong>
          <span className="contact-link">Basti, Uttar Pradesh, India</span>
        </p>
      </div>
    </section>
  );
}