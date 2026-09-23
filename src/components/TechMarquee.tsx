import Marquee from "react-fast-marquee";
import "./styles/TechMarquee.css";

const technologies = [
  "Python", "C", "C++", "Java", "SQL", "JavaScript", 
  "Machine Learning", "Artificial Intelligence", "Data Science", 
  "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", 
  "Django", "Flutter", "AWS", "Cloud Computing", "ROS", 
  "Git", "REST APIs", "Pandas", "NumPy", "Scikit-learn"
];

const TechMarquee = () => {
  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee-fade-left"></div>
      <div className="tech-marquee-fade-right"></div>
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {technologies.map((tech, index) => (
          <div key={index} className="tech-marquee-item">
            {tech}
            <span className="tech-marquee-separator">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
