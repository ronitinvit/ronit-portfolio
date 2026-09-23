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
                <h4>B.Tech, Computer Science (AI & Robotics)</h4>
                <h5>Vellore Institute of Technology, Chennai</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Began building foundations in Java, Python, and core CS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Tata Steel</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built and rigorously evaluated a gearbox fault-diagnosis system using PyTorch and classical ML, designing a leakage-aware evaluation framework to test real-world generalization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Projects & AI-Assisted Development</h4>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building full-stack applications, GenAI systems (RAG, LangGraph agents), and automation tools — while actively exploring AI coding agents to accelerate development. AWS Certified Solutions Architect (2026).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
