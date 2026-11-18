import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default function Features() {
  const [showAll, setShowAll] = useState(false);

  // Daftar lengkap semua project yang disatukan
  const allProjects = [
    {
      title: "PT Apel Merah Medika",
      text: "Building responsive and scalable front-end apps.",
      category: "Software Engineer",
      image: require("../assets/portfolio/apelmerahmedika.jpeg"),
      website: "https://aqilmaulana12345.github.io/PTApelMerahMedika.github.io/index.html",
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
    },
    {
      title: "Weather App",
      text: "Building responsive and scalable front-end apps.",
      category: "Software Engineer",
      image: require("../assets/portfolio/weatherapp.jpeg"),
      website: "https://weatherapp-six-pink.vercel.app/",
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
    },
    {
      title: "Lendsqr",
      text: "Building responsive and scalable money management apps.",
      category: "Software Engineer",
      image: require("../assets/portfolio/lendsqr.PNG"),
      website: "https://lendsqr-aqilmaulana.vercel.app/login",
    },
    {
      title: "Rakamin's Project",
      text: "Building responsive and scalable AI platform from Rakamin's Project.",
      category: "Software Engineer",
      image: require("../assets/portfolio/rakamin.PNG"), 
      github: "https://github.com/aqilmaulana12345/ai-interview-platform",
      website: "https://github.com/aqilmaulana12345/ai-interview-platform",
    },
    {
      title: "Chain Fleet Project",
      text: "Building responsive and scalable Car Rental With Web 3 Method.",
      category: "Software Engineer",
      image: require("../assets/portfolio/web3.jpg"), 
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io",
      website: "https://carfleet-nagquhnj4-aqilmaulana12345s-projects.vercel.app/",
    },
    {
      title: "Niagahoster's UI/UX Design",
      text: "Designing intuitive wireframes and prototypes.",
      category: "UI/UX Design",
      image: require("../assets/portfolio/Niagahoster.jpeg"),
      website: "https://www.behance.net/gallery/160966459/UIUX-Case-Study-Redesign-of-Niagahoster-Checkout-Page",
    },
    {
      title: "Qword's UI/UX Design",
      text: "Designing intuitive wireframes and prototypes.",
      category: "UI/UX Design",
      image: require("../assets/portfolio/Qwords.jpeg"),
      website: "https://www.behance.net/gallery/196734381/Redesign-Login-Page-QWORDS?tracking_source=project_owner_other_projects",
    },
  ];

  // Pisahkan berdasarkan kategori untuk tab spesifik
  const softwareEngineerProjects = allProjects.filter(p => p.category === "Software Engineer");
  const uiuxProjects = allProjects.filter(p => p.category === "UI/UX Design");

  // Logika showAll: jika false tampilkan 4 item pertama, jika true tampilkan semua
  const visibleAllProjects = showAll ? allProjects : allProjects.slice(0, 4);

  const experiences = [
    {
      title: "Frontend Developer at Kibar Development",
      period: "June 2024 - August 2025",
      description: "🚀 Front-End Developer: Building responsive, scalable web apps with React.js, Material-UI, TypeScript, and Framer Motion. Focus on clean UI, performance, accessibility, and API integration (SurrealDB). Experienced in developing digital signage projects for BCA and AHM."
    },
    {
      title: "Frontend Developer at PT Apel Merah Medika",
      period: "May 2024 - June 2024",
      description: "As a Front-End Developer, I build responsive and user-friendly interfaces with HTML, CSS, and Bootstrap, ensuring performance, accessibility, and clean, reusable code."
    },
    {
      title: "Private Teacher at Bimbel Bu Emi",
      period: "Sep 2022 - Present",
      description: "I teach all subjects for elementary to high school students and introduce basic programming concepts, including HTML, CSS, and JavaScript. My goal is to make learning simple, engaging, and effective."
    },
    {
      title: "UI/UX Design at Luar Sekolah",
      period: "May 2023 - July 2024",
      description: "UI/UX Designer at Luarsekolah, designing and developing the Luarsekolah Academy (LSA) platform through research, prototyping, and testing to deliver an intuitive learning experience."
    },
  ];

  return (
    <section id="features" className="py-5 bg-transparent text-light">
      <Container>
        <h2 className="text-start mb-4">Projects</h2>
        <Tab.Container defaultActiveKey="All">
          <Nav variant="pills" className="mb-3 custom-tabs">
            <Nav.Item>
              <Nav.Link eventKey="All">All Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Software Engineer">Software Engineer (Front End Developer)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="UI/UX Design">UI/UX Design</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Tab All */}
            <Tab.Pane eventKey="All">
              <Row>
                {visibleAllProjects.map((feature, index) => (
                  <Col xs={12} md={6} className="mb-4" key={index}>
                    <Card
                      className="text-center p-3 shadow-sm text-light border-light h-100"
                      style={{
                        background: "linear-gradient(135deg, #0d0d2b, #1a1a40, #000000)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 0 20px rgba(0, 0, 50, 0.6)",
                        borderRadius: "15px"
                      }}
                    >
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="img-fluid mb-3"
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                              boxShadow: "0 0 15px rgba(0, 191, 255, 0.7)",
                              cursor: "pointer",
                              borderRadius: "10px"
                            }}
                            onClick={() => window.open(feature.image, "_blank")}
                          />
                          <Card.Title>{feature.title}</Card.Title>
                          <Card.Text>{feature.text}</Card.Text>
                        </div>

                        <div className="d-flex justify-content-center gap-2 mt-3">
                          <Button
                            style={{
                              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                              border: "none",
                              color: "white",
                              padding: "10px 20px",
                              borderRadius: "8px",
                              boxShadow: "0 0 15px rgba(0, 191, 255, 0.6)",
                              transition: "all 0.3s ease-in-out",
                            }}
                            onClick={() => window.open(feature.website, "_blank")}
                          >
                            🚀 Visit Website
                          </Button>

                          {feature.github && (
                            <Button
                              variant="dark"
                              onClick={() => window.open(feature.github, "_blank")}
                              className="github-btn space-btn"
                            >
                              <FaGithub className="bounce-icon" style={{ marginRight: "8px" }} />
                              GitHub
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-3">
                <Button variant="outline-light" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Show Less" : "Read More"}
                </Button>
              </div>
            </Tab.Pane>

            {/* Tab Software Engineer */}
            <Tab.Pane eventKey="Software Engineer">
              <Row>
                {softwareEngineerProjects.map((feature, index) => (
                  <Col xs={12} md={6} className="mb-4" key={index}>
                    <Card
                      className="text-center p-3 shadow-sm text-light border-light h-100"
                      style={{
                        background: "linear-gradient(135deg, #0d0d2b, #1a1a40, #000000)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 0 25px rgba(0, 0, 80, 0.7), inset 0 0 10px rgba(0, 0, 60, 0.5)",
                        borderRadius: "15px",
                        overflow: "hidden"
                      }}
                    >
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="img-fluid mb-3"
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                              boxShadow: "0 0 15px rgba(0, 191, 255, 0.7)",
                              cursor: "pointer",
                              borderRadius: "10px"
                            }}
                            onClick={() => window.open(feature.image, "_blank")}
                          />
                          <Card.Title>{feature.title}</Card.Title>
                          <Card.Text>{feature.text}</Card.Text>
                        </div>

                        <div className="d-flex justify-content-center gap-2 mt-3">
                          <Button
                            style={{
                              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                              border: "none",
                              color: "white",
                              padding: "10px 20px",
                              borderRadius: "8px",
                              boxShadow: "0 0 15px rgba(0, 191, 255, 0.6)",
                            }}
                            onClick={() => window.open(feature.website, "_blank")}
                          >
                            🚀 Visit Website
                          </Button>

                          {feature.github && (
                            <Button
                              variant="dark"
                              onClick={() => window.open(feature.github, "_blank")}
                              className="github-btn space-btn"
                            >
                              <FaGithub className="bounce-icon" style={{ marginRight: "8px" }} />
                              GitHub
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            {/* Tab UI/UX Design */}
            <Tab.Pane eventKey="UI/UX Design">
              <Row>
                {uiuxProjects.map((feature, index) => (
                  <Col xs={12} md={6} className="mb-4" key={index}>
                    <Card
                      className="text-center p-3 shadow-sm bg-dark text-light border-light h-100"
                      style={{ borderRadius: "15px" }}
                    >
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="img-fluid mb-3"
                            style={{ width: "200px", height: "200px", objectFit: "cover", cursor: "pointer", borderRadius: "10px" }}
                            onClick={() => window.open(feature.image, "_blank")}
                          />
                          <Card.Title>{feature.title}</Card.Title>
                          <Card.Text>{feature.text}</Card.Text>
                        </div>

                        <div className="mt-3">
                          <Button
                            style={{
                              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                              border: "none",
                              color: "white",
                              padding: "8px 16px",
                              borderRadius: "8px",
                              boxShadow: "0 0 10px rgba(0, 191, 255, 0.6)",
                            }}
                            onClick={() => window.open(feature.website, "_blank")}
                          >
                            🚀 Visit Website
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* Pengalaman Kerja */}
        <h2 className="text-start mt-5 mb-4">Experience</h2>
        <div className="space-bg p-4">
          <Row>
            {experiences.map((exp, index) => (
              <Col xs={12} md={4} className="mb-4" key={index}>
                <Card
                  className="text-center p-3 shadow-sm text-light border-light h-100"
                  style={{
                    background: "linear-gradient(135deg, #0d0d2b, #1a1a40, #000)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Subtitle
                      className="mb-2"
                      style={{ color: "#bbb", fontStyle: "italic" }}
                    >
                      {exp.period}
                    </Card.Subtitle>
                    <Card.Text>{exp.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <style jsx>{`
        .custom-tabs .nav-link {
          background: linear-gradient(90deg, #0b3d91, #6a0dad, #1e90ff);
          color: white;
          margin-right: 5px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .custom-tabs .nav-link:hover {
          filter: brightness(1.1);
        }

        .custom-tabs .nav-link.active {
          background: rgba(30, 144, 255, 0.3);
          color: white;
          border: 1px solid white;
        }

        .bounce-icon {
          display: inline-block;
          animation: bounce 1.5s infinite;
        }

        .github-btn.space-btn {
          background: linear-gradient(135deg, #0d0d2b, #1a1a40, #000000);
          border: 1px solid #4f4fff;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          border-radius: 12px;
          padding: 10px 18px;
          box-shadow: 0 0 12px rgba(79, 79, 255, 0.4);
          transition: all 0.3s ease-in-out;
        }

        .github-btn.space-btn:hover {
          background: linear-gradient(135deg, #1a1a40, #2d2d70, #0d0d2b);
          box-shadow: 0 0 20px rgba(150, 150, 255, 0.7), 0 0 40px rgba(100, 100, 255, 0.4);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}