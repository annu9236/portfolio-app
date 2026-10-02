import { FaLaravel, FaDatabase, FaCode, FaReact } from 'react-icons/fa';
import { SiPhp, SiMysql } from 'react-icons/si';
import { BiLink } from 'react-icons/bi';

export default function Services() {
  const services = [
    {
      icon: <SiPhp size={40} color="#38bdf8" />,
      title: "PHP / Laravel Development",
      desc: "Development of practical web applications using PHP and Laravel with MVC architecture, authentication, CRUD operations, validation, and database integration."
    },
    {
      icon: <SiMysql size={40} color="#38bdf8" />,
      title: "MySQL Database Development",
      desc: "Design and management of MySQL databases with relationships, queries, data validation, and Laravel Eloquent for database operations."
    },
    {
      icon: <BiLink size={40} color="#38bdf8" />,
      title: "REST API Development",
      desc: "Development and integration of REST APIs using Laravel for handling structured data and communication between applications."
    },
    {
      icon: <FaReact size={40} color="#38bdf8" />,
      title: "Frontend Integration",
      desc: "Integration of backend applications with React.js, JavaScript, Bootstrap, and responsive frontend components."
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">What I Offer</h2>

      <p className="section-subtitle">
        Development skills and solutions I can contribute as a PHP/Laravel Developer
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}