import { FaLaravel, FaDatabase, FaCode, FaReact } from 'react-icons/fa';
import { SiPhp, SiMysql } from 'react-icons/si';
import { GiGearHammer } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';

export default function Services() {
  const services = [
    {
      icon: <SiPhp size={40} color="#38bdf8" />,
      title: "PHP / Laravel Development",
      desc: "Custom web applications using PHP and Laravel framework with MVC architecture, authentication, and security features."
    },
    {
      icon: <SiMysql size={40} color="#38bdf8" />,
      title: "Database Design & Management",
      desc: "MySQL database design, optimization, complex queries, and database migration using Laravel Eloquent."
    },
    {
      icon: <BiLink size={40} color="#38bdf8" />,
      title: "REST API Development",
      desc: "Build secure and scalable RESTful APIs for web and mobile applications with proper authentication."
    },
    {
      icon: <FaReact size={40} color="#38bdf8" />,
      title: "Frontend Integration",
      desc: "Integrate React.js, Bootstrap, and responsive designs with Laravel backend for complete solutions."
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">What I Offer</h2>
      <p className="section-subtitle">
        Services and expertise I provide as a PHP/Laravel Developer
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