import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Student Job Platform",
    category: "Full Stack Web & Mobile App",
    tools: "React, Flutter, Node.js, Express, MongoDB",
  },
  {
    name: "HostelIQ",
    category: "Smart Hostel Allocation System",
    tools: "React, Node.js, Express, Firebase, Twilio",
  },
  {
    name: "AI-Powered Shopping Assistant",
    category: "Generative AI / RAG Pipeline",
    tools: "Llama/Mistral, ChromaDB, Flask, Python",
  },
  {
    name: "Mail Automation Agent",
    category: "AI Agentic Workflow",
    tools: "LangGraph, Flask, Gmail API, Python",
  },
  {
    name: "Automated Product Search",
    category: "Test Automation & Web Scraping",
    tools: "Python, Selenium, Playwright, FastAPI, PyTest",
  },
  {
    name: "Military Surveillance Robot",
    category: "Robotics & Computer Vision",
    tools: "ROS2, LoRa, OpenCV, PyTorch",
  }
];

const Work = () => {
  useGSAP(() => {
  let timeline: gsap.core.Timeline | undefined;
  
  const timer = setTimeout(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        pinType: "transform",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });
    
    ScrollTrigger.refresh();
  }, 100);

  // Clean up (optional, good practice)
  return () => {
    clearTimeout(timer);
    if (timeline) timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
