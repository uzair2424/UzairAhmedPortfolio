import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (Pre-Engineering)</h4>
                <h5>Degree College Nawabshah</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Completed Intermediate in Pre-Engineering, building a strong foundation
              in mathematics, physics, and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Software Engineering</h4>
                <h5>iQRA University Karachi</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Currently in 6th Semester, pursuing BS Software Engineering.
              Expected Graduation: 2026. Focusing on modern web development
              technologies and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>SAVTECH Digital</h5>
              </div>
              <h3>AUG 2025 - SEP 2025</h3>
            </div>
            <p>
              Assisted in frontend development of live projects. Learned industry
              best practices for UI/UX and responsiveness. Worked with real-world
              development tools and workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>SAVTECH Digital</h5>
              </div>
              <h3>OCT 2025 - MAR 2026</h3>
            </div>
            <p>
              Developed multiple responsive and SEO-friendly websites. Built modern
              UI using React.js and Next.js. Integrated REST APIs for dynamic
              frontend functionality. Worked on brand-focused business websites.
              Contributed to HRMS system (PHP-based), improving frontend usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
