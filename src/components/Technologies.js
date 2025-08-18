import React from "react";
import { Container, Row, Col, ProgressBar, Badge } from "react-bootstrap";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,FaDatabase  } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiTailwindcss, SiRedux, SiMongodb, SiTypescript, SiExpress,SiLaravel,SiMysql,SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si"; 
import { SiVuedotjs, SiGo ,  SiBitbucket, SiPhp} from "react-icons/si";
import { SiFigma } from "react-icons/si"; // ⬅ tambahin import




// Inline CSS animation
const iconStyle = {
  spin: {
    display: "inline-block",
    animation: "spin 3s linear infinite"
  },
  bounce: {
    display: "inline-block",
    animation: "bounce 1.5s infinite"
  },
};

// Keyframes as global style
const globalStyle = `
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
`;

export default function Technologies() {
  const skills = [
    { name: "React JS", value: 90, icon: <FaReact color="#61DBFB" size={32} style={iconStyle.spin} /> },
    { name: "JavaScript", value: 85, icon: <SiJavascript color="#F7DF1E" size={32} style={iconStyle.bounce} /> },
    { name: "HTML & CSS", value: 95, icon: <><FaHtml5 color="#E34F26" size={32} style={iconStyle.spin} /> <FaCss3Alt color="#1572B6" size={24} style={iconStyle.bounce} /></> },
    { name: "TypeScript", value: 85, icon: <SiTypescript color="#3178C6" size={32} style={iconStyle.bounce} /> },
    { name: "Bootstrap", value: 80, icon: <SiBootstrap color="#7952B3" size={32} style={iconStyle.bounce} /> },
    { name: "Git & GitHub", value: 70, icon: <FaGitAlt color="#F1502F" size={32} style={iconStyle.spin} /> },
    { name: "Material-UI", value: 80, icon: <SiMui color="#007FFF" size={32} style={iconStyle.bounce} /> },
    { name: "Next.js", value: 85, icon: <SiNextdotjs color="#ffffff" size={32} style={iconStyle.bounce} /> },
    { name: "Bitbucket", value: 75, icon: <SiBitbucket color="#0052CC" size={32} style={iconStyle.bounce} /> }, // ✅ baru
    { name: "Figma", value: 85, icon: <SiFigma color="#F24E1E" size={32} style={iconStyle.spin} /> },
  ];

  const additionalSkills = [
    { name: "Node JS", value: 75, icon: <FaNodeJs color="#68A063" size={32} style={iconStyle.spin} /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" size={32} style={iconStyle.spin} /> },
    { name: "Express JS", icon: <SiExpress color="#ffffff" size={32} style={iconStyle.bounce} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={32} style={iconStyle.spin} /> },
    { name: "REST API", icon: <FaNodeJs color="#68A063" size={32} style={iconStyle.bounce} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" size={32} style={iconStyle.spin} /> },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" size={32} style={iconStyle.spin} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={32} style={iconStyle.bounce} /> },
    { name: "Golang", icon: <SiGo color="#00ADD8" size={32} style={iconStyle.spin} /> },
    { name: "Vue.js", icon: <SiVuedotjs color="#42B883" size={32} style={iconStyle.spin} /> },
    { name: "SurrealDB", icon: <FaDatabase color="#FF00A0" size={32} style={iconStyle.bounce} /> }, // ⬅ SurrealDB
    { name: "PHP", icon: <SiPhp color="#777BB4" size={32} style={iconStyle.spin} /> },
  ];
  
  
  return (
    <>
      {/* Inject global keyframes */}
      <style>{globalStyle}</style>

      {/* Main Technologies Section */}
      <section id="technologies" className="py-5 bg-transparent text-light">
        <Container>
          <h2 className="text-start mb-4">Technologies</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col xs={12} md={6} className="mb-3 d-flex align-items-center" key={index}>
                <div className="me-2">{skill.icon}</div>
                <div style={{ flex: 1 }}>
                  <h5>{skill.name}</h5>
                  <ProgressBar
  now={skill.value}
  label={`${skill.value}%`}
  style={{
    height: "20px",
    borderRadius: "15px",
    backgroundColor: "#1a1a1a", // track gelap ala space
    overflow: "hidden",
  }}
>
  <div
    style={{
      width: `${skill.value}%`,
      height: "100%",
      background: "linear-gradient(90deg, #0b3d91, #6a0dad, #1e90ff)", // gradient space
      boxShadow: "0 0 8px rgba(106,13,173,0.6), 0 0 12px rgba(30,144,255,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
      transition: "width 0.5s ease-in-out",
    }}
  >
    {`${skill.value}%`}
  </div>
</ProgressBar>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Addition Technologies and Skills */}
     {/* Addition Technologies and Skills */}
<section id="additional-skills" className="py-5 bg-transparent text-light">
  <Container>
    <h2 className="text-start mb-4">Additional Technologies and Skills</h2>
    <div className="d-flex flex-wrap gap-2">
      {additionalSkills.map((skill, index) => (
        <Badge
          bg="transparent"
          key={index}
          className="fs-6 d-flex align-items-center gap-1"
        >
          <span style={{ display: "inline-block", animation: "bounce 1.5s infinite" }}>
            {skill.icon}
          </span>{" "}
          {skill.name}
        </Badge>
      ))}
    </div>
  </Container>
</section>


      {/* About Me Section */}
  
    </>
  );
}
