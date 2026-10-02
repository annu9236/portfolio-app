import { FaHandshake, FaDownload } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        <div className="home-text">
          <h1>
            Hello, I'm <span>Annu Vishwakarma</span>
          </h1>

          <h2>PHP / Laravel Developer</h2>

          <p>
            I build practical and database-driven web applications using
            PHP, Laravel, MySQL, and JavaScript. I have hands-on experience
            in backend development, authentication, CRUD operations,
            database management, and REST API development.
          </p>

          <div className="btn-group">

            <a href="#projects" className="btn primary">
              <HiOutlineViewGrid
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              />
              View My Work
            </a>

            <a href="#contact" className="btn outline">
              <FaHandshake
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              />
              Contact Me
            </a>

            <a
              href="/Annu_Vishwakarma_Resume.pdf"
              download
              className="btn outline"
            >
              <FaDownload
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              />
              Download Resume
            </a>

          </div>
        </div>

        <div className="home-image">
          <img
            src="/my_photo.png"
            alt="Annu Vishwakarma"
            className="profile-image"
          />
        </div>

      </div>
    </section>
  );
}