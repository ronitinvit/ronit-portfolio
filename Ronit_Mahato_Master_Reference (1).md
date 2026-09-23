# Ronit Mahato — Master Resume Reference

Use this document as the single source of truth when prompting an AI to tailor a resume for a new role. Paste the relevant sections (or the whole thing) along with the target JD.

---

## Contact & Identity
- Name: Ronit Mahato
- Phone: +91 7992444855
- Email: ronit.mahato2023@vitstudent.ac.in
- GitHub: github.com/ronitinvit
- LinkedIn: linkedin.com/in/ronitmahato
- B.Tech, Computer Science and Engineering (AI & Robotics specialization), Vellore Institute of Technology (VIT), Chennai
- Batch: 2023–2027 (currently third-year)
- Holds a 4-year Fine Arts diploma from Hasta Kala Kendra, Jamshedpur

## Career Aspiration
Building an early career in technology consulting, with a longer-term plan to pursue an MBA and move toward roles that bridge technology and business strategy.

---

## Internship

**Tata Steel — AI/ML Intern** (May 2026 – June 2026)

- Built a gearbox fault-diagnosis pipeline for predictive maintenance using multi-sensor vibration data (MCC5-THU dataset: 240 recordings, 8 fault classes, 12 operating conditions).
- Framework: PyTorch (not TensorFlow) for a custom 1D CNN; compared against classical ML baselines — Logistic Regression (67.69%), SVM-RBF (77.00%), Random Forest (80.26%), CNN (83.35% ± 9.10% mean accuracy, 81.34% ± 9.47% macro-F1).
- Designed a leakage-aware Leave-One-Operating-Condition-Out (LOCO) evaluation framework to rigorously test generalization across 12 operating conditions.
- Analyzed condition-wise, fault-wise, and severity-based failure patterns beyond aggregate accuracy; documented findings for reproducibility.
- Automated engineering workflows using AI coding agents (OpenClaw) to improve development efficiency — prompting, steering execution loops, reviewing agent-generated code.
- Explored agentic AI frameworks (LangChain, LangGraph) as a parallel learning track.
- Backend preference: Flask (not FastAPI/Django) for this work. GCP used hands-on; AWS used only exploratory during this internship (though AWS cert earned separately later — see Certifications).
- Short-form summary (for application forms): "Designed and evaluated an ML/DL fault-diagnosis pipeline for predictive maintenance, analyzed model failure patterns, and automated workflows using AI agents."

---

## Project Portfolio (confirmed, reusable across resumes)

1. **Student Job Platform** — React (web) + Flutter (Android), Node.js/Express backend, MongoDB. Recruiter/employer and student authentication, resume upload, search & filtering, admin panel. REST APIs and MongoDB schema keeping data consistent across web and Android clients.

2. **HostelIQ — Smart Hostel Allocation System** — React, Node.js, Express, Firebase. NCGPA-based allocation algorithm solving fair, cross-branch room allocation as an optimization problem. OTP-based friend group allocation, automated notifications via Twilio, Firebase Firestore data management.

3. **AI-Powered Shopping Assistant** — RAG pipeline. Chunked and embedded product data into a ChromaDB vector store; grounded an open-source LLM (Llama/Mistral) for recommendations, Q&A, and support queries. Served via Flask backend with semantic search retrieval.

4. **Mail Automation Agent** — LangGraph, Flask, Gmail API. Agentic email automation pipeline with multi-step LLM workflow (tool-use, function calling) to filter and summarize incoming mail.

5. **Automated Cross-Platform Product Search & Price Comparison** — Python, Selenium, Playwright, FastAPI, PyTest. Automated test framework validating scraped product data across multiple e-commerce platforms; PyTest regression suite catching data-integrity issues; FastAPI backend and REST APIs.

6. **Price Comparison & Analytics Dashboard** — Python, Streamlit, Plotly, GCP (Cloud Storage + Cloud Run). Interactive analytics dashboard visualizing price-comparison data, deployed end-to-end on GCP.

7. **Intelligent Business Process Automation** — UiPath REFramework, SAP PO validation. RPA workflow validating purchase order data against business rules.

8. **Military Surveillance Robot** — ROS2, LoRa, GPS, OpenCV, PyTorch. Autonomous surveillance robot with real-time monitoring, secure multi-node communication, custom human detection pipeline. **Published: "SENTINEL: Surveillance and ENhanced Transmission for Intelligent Enemy Localization" — Presented at EWCI Conference, 2026.** (Always keep this publication on resumes.)

9. **Haptic Terrain Intelligence** — XGBoost, PyBullet, force/IMU sensors. Terrain classification using haptic feedback; 97.4% accuracy.

---

## Technical Skills (master list — pick relevant subset per role)

- **Languages:** Python, Java, C++, C, SQL, JavaScript
- **AI/ML & GenAI:** PyTorch, TensorFlow (rarely used — prefer PyTorch), Scikit-learn, XGBoost, RAG, LangGraph, ChromaDB, Vector Search, Embeddings, Prompt Engineering, Open-Source LLMs (Llama/Mistral), OpenClaw (AI coding agent)
- **Web & Backend:** React, Flutter, Node.js, Express, Flask (preferred over FastAPI/Django for most contexts, though FastAPI used in specific projects — see portfolio), FastAPI, REST APIs, MongoDB, Firebase
- **Automation & Testing:** Selenium, Playwright, PyTest, JUnit, UiPath REFramework
- **Data & Visualization:** Pandas, NumPy, Plotly, Streamlit, Power BI, Excel
- **Robotics:** ROS2, LoRa, ESP32, OpenCV, PyBullet
- **Cloud & Tools:** AWS (certified — see below), GCP (hands-on: Cloud Storage, Cloud Run), Docker (some exposure), Git, GitHub, Linux
- **Core CS:** Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks

## Certifications
- **AWS Certified Solutions Architect – Associate (SAA-C03)** — passed 2026-09-09. Always include on resumes wherever relevant.

## Publication
- **SENTINEL: Surveillance and ENhanced Transmission for Intelligent Enemy Localization** — Presented at EWCI Conference, 2026. Always keep on resumes.

## Positions of Responsibility
- **President — Sangam Club, VIT Chennai.** Led cross-functional student teams; managed budget allocation and sponsor negotiations for university-scale events.
- **Design Lead — Trekking Club, VIT Chennai.**
- **Media Lead — Reva Solar Racing Team, VIT Chennai.**

## Other Background
- 4-year Fine Arts Diploma — Hasta Kala Kendra, Jamshedpur (informs design-oriented/UI-UX framing where relevant).

---

## Standing Corrections / Preferences (do not contradict these)
- Backend: Flask, not FastAPI or Django, for the Tata Steel internship specifically (FastAPI is correctly used in a couple of *projects*, not the internship).
- Uses **both** Selenium and Playwright (not just one).
- GCP = hands-on experience; AWS = exploratory during the internship, but formally AWS-certified afterward — phrase accordingly depending on context (internship bullet vs. certifications section).
- ML framework is **PyTorch**, not TensorFlow, for the 1D CNN work.
- Always try to include the SENTINEL publication and the AWS certification on resumes wherever the format allows.

---

## Companies/Roles Already Tailored For (avoid duplicating from scratch — ask if a resume already exists)
Siemens DISW (DEV Intern), Zluri (SDET Intern), Responsive (Associate Software Engineer), TresVista (Financial Services), Capgemini (Exceller 2027), WTW (Actuarial Analyst), Amazon (SDE Intern), Ujjivan (DSDM), Embitel/CARIAD (Graduate Engineer Trainee), Myntra (PM Intern), Deloitte (Audit & Assurance Data Analytics; Tech Analyst), ERA:AI Fellowship (CV), Schneider Electric (SD Track), Whirlpool (Automation & DevOps), NatWest (Software Engineer), Celebal Technologies (Data Scientist Intern — ML/GenAI/Agentic AI), HSBC (Traded Risk Analyst Intern), Chargebee (Software Engineer Intern), KPMG (Digital Platforms), Nuaav (Developer/Data Engineer hybrid), Rystad Energy (Data & Research Analyst — flagged: requires Master's degree, eligibility mismatch).

---

## Notes for the Next Assistant
- All resumes are built in LaTeX, compiled to PDF, kept to one page unless explicitly a two-page format (e.g., Master resume, ERA Fellowship CV).
- Standard structure: Header → Summary → Experience (Tata Steel) → Projects (3–4 selected/reframed per role) → Technical Skills (table, reordered/relabeled per JD) → Education → Certifications → Positions of Responsibility → Publication.
- Tailoring approach: reframe the *same* underlying facts (never fabricate new ones) using the target JD's own vocabulary — mirror responsibility phrasing closely, reorder skills to match the JD's stated priority, swap in the 3–4 most relevant projects out of the 9 confirmed above, and flag honest gaps rather than overstating fit.
