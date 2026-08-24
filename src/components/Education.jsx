export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        My academic background and qualifications
      </p>
      <div className="education-grid">
        <div className="education-card">
          <h4>Diploma in Computer Science & Engineering</h4>
          <p className="institute">Mahamaya Polytechnic of Information Technology, Hariharpur, Gorakhpur</p>
          <div className="percentage-container">
            <div className="percentage-label">
              <span>Lateral Entry</span>
              <span>77.63%</span>
            </div>
            <div className="percentage-bar">
              <div className="percentage-fill high" style={{ width: '77.63%' }}></div>
            </div>
          </div>
          <p className="year">2024 - 2026</p>
        </div>

        <div className="education-card">
          <h4>Intermediate (12th), UP Board</h4>
          <p className="institute">National Inter College Harraiya, District Basti</p>
          <div className="percentage-container">
            <div className="percentage-label">
              <span>Percentage</span>
              <span>78%</span>
            </div>
            <div className="percentage-bar">
              <div className="percentage-fill high" style={{ width: '78%' }}></div>
            </div>
          </div>
          <p className="year">2022 - 2023</p>
        </div>
      </div>
    </section>
  );
}