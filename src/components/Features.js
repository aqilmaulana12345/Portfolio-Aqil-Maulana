import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Tab , Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";




export default function Features() {
  const [showAll, setShowAll] = useState(false);
  const data = [
    {
      title: "PT Apel Merah Medika",
      text: "Building responsive and scalable front-end apps.",
      category: "Software Engineer",
      image: require("../assets/portfolio/apelmerahmedika.jpeg"),
     website: "https://aqilmaulana12345.github.io/PTApelMerahMedika.github.io/index.html",   // ✅ link khusus
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
    },
    {
      title: "Weather App",
      text: "Building responsive and scalable front-end apps.",
      category: "UI/UX Design",
      image: require("../assets/portfolio/weatherapp.jpeg"),
        website: "https://weatherapp-six-pink.vercel.app/",   // ✅ link khusus
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
    },
    {
      title: "Niagahoster's UI/UX Design",
      text: "Designing intuitive wireframes and prototypes.",
      category: "UI/UX Design",
      image: require("../assets/portfolio/Niagahoster.jpeg"),
      website: "https://www.behance.net/gallery/160966459/UIUX-Case-Study-Redesign-of-Niagahoster-Checkout-Page",   // ✅ link khusus
    },
    {
      title: "Qword's UI/UX Design",
      text: "Designing intuitive wireframes and prototypes.",
      category: "UI/UX Design",
      image: require("../assets/portfolio/Qwords.jpeg"),
      website: "https://www.behance.net/gallery/196734381/Redesign-Login-Page-QWORDS?tracking_source=project_owner_other_projects",   // ✅ link khusus
      
    },
   
  ];

  // kalau showAll true -> semua ditampilkan, kalau false -> cuma 2
  const visibleData = showAll ? data : data.slice(0, 2);
  const experiences = [
    {
      title: "Frontend Developer at Kibar Development",
      period: "June 2024 - August 2025",
      description: "🚀 Front-End Developer: Building responsive, scalable web apps with React.js, Material-UI, TypeScript, and Framer Motion. Focus on clean UI, performance, accessibility, and API integration (SurrealDB). Experienced in developing digital signage projects for BCA and AHM."

    },
    {
      title: "Frontend Developer at PT Apel Merah Medika",
      period: "May 2024 - June 2024 ",
      description: "As a Front-End Developer, I build responsive and user-friendly interfaces with HTML, CSS, and Bootstrap, ensuring performance, accessibility, and clean, reusable code."
    },
    {
      title: "Private Teacher at Bimbel Bu Emi ",
      period: "Sep 2022 - Present",
      description: "I teach all subjects for elementary to high school students and introduce basic programming concepts, including HTML, CSS, and JavaScript. My goal is to make learning simple, engaging, and effective."
    },
    {
      title: "UI/UX Design at Luar Sekolah ",
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
              <Nav.Link eventKey="Software Engineer">Software Engineer (Front End Developer)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="UI/UX Design">UI/UX Design</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
          <Tab.Pane eventKey="All">
  <>
    <Row>
      {visibleData.map((feature, index) => (
        <Col xs={12} md={6} className="mb-4" key={index}>
          <Card
            className="text-center p-3 shadow-sm text-light border-light"
            style={{
              background: "linear-gradient(135deg, #0d0d2b, #1a1a40, #000000)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 20px rgba(0, 0, 50, 0.6)",
            }}
          >
            <Card.Body>
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
                }}
                onClick={() => window.open(feature.image, "_blank")} // ✅ klik gambar buka versi full
              />
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.text}</Card.Text>

              {/* ✅ tombol per item */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {/* 🚀 Visit Website */}
                <Button
                  style={{
                    background:
                      "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // gradasi space
                    border: "none",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 0 15px rgba(0, 191, 255, 0.6)", // efek glow biru
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.08)";
                    e.target.style.boxShadow =
                      "0 0 25px rgba(138, 43, 226, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow =
                      "0 0 15px rgba(0, 191, 255, 0.6)";
                  }}
                  onClick={() => window.open(feature.website, "_blank")}
                >
                  🚀 Visit Website
                </Button>

                {/* ✅ GitHub hanya muncul kalau ada */}
                {feature.github && (
                  <Button
                    variant="dark"
                    onClick={() => window.open(feature.github, "_blank")}
                    className="github-btn space-btn"
                  >
                    <FaGithub
                      className="bounce-icon"
                      style={{ marginRight: "8px" }}
                    />
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
  </>
</Tab.Pane>


  <Tab.Pane eventKey="Software Engineer">
  <Row>
    {[
          {
            title: "PT Apel Merah Medika",
      text: "Building responsive and scalable front-end apps.",
      category: "Software Engineer",
      image: require("../assets/portfolio/apelmerahmedika.jpeg"),
     website: "https://aqilmaulana12345.github.io/PTApelMerahMedika.github.io/index.html",   // ✅ link khusus
      github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
          },
          {
            title: "Weather App",
            text: "Building responsive and scalable front-end apps.",
            category: "UI/UX Design",
            image: require("../assets/portfolio/weatherapp.jpeg"),
              website: "https://weatherapp-six-pink.vercel.app/",   // ✅ link khusus
            github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io"
          },
          {
            title: "Lendsqr",
            text: "Building responsive and scalable money management apps.",
            category: "Software Engineer",
            image: require("../assets/portfolio/lendsqr.PNG"),
            website: "https://lendsqr-aqilmaulana.vercel.app/login",   // ✅ link khusus
           
          },
          {
            title: "Rakamin's Project ",
            text: "Building responsive and scalable money management apps.",
            category: "Software Engineer",
            image: require("../assets/portfolio/rakamin.PNG"), 
            github: "https://github.com/aqilmaulana12345/ai-interview-platform" ,
            website: "https://github.com/aqilmaulana12345/ai-interview-platform",   // ✅ link khusus

          },
          {
            title: "Chain Fleet Project ",
            text: "Building responsive and scalable money management apps.",
            category: "Software Engineer",
            image: require("../assets/portfolio/web3.jpg"), 
            github: "https://github.com/aqilmaulana12345/PTApelMerahMedika.github.io",
            website: "https://carfleet-nagquhnj4-aqilmaulana12345s-projects.vercel.app/",   // ✅ link khusus
          }

    ].map((feature, index) => (
      <Col xs={12} md={6} className="mb-4" key={index}>
        <Card
          className="text-center p-3 shadow-sm text-light border-light"
          style={{
            background: "linear-gradient(135deg, #0d0d2b, #1a1a40, #000000)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 0 25px rgba(0, 0, 80, 0.7), inset 0 0 10px rgba(0, 0, 60, 0.5)",
            borderRadius: "15px",
            overflow: "hidden"
          }}
          onClick={() => window.open(feature.image, "_blank")} // ✅ buka tab baru
        >
          <Card.Body>
            <img
              src={feature.image}
              alt={feature.title}
              className="img-fluid  mb-3"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                boxShadow: "0 0 15px rgba(0, 191, 255, 0.7)" // efek glow
              }}
              onClick={() => window.open(feature.image, "_blank")} // ✅ buka tab baru
            />
            <Card.Title>{feature.title}</Card.Title>
            <Card.Text>{feature.text}</Card.Text>
            <Button
  style={{
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // gradasi space
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 191, 255, 0.6)", // efek glow biru
    transition: "all 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.08)";
    e.target.style.boxShadow = "0 0 25px rgba(138, 43, 226, 0.8)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(0, 191, 255, 0.6)";
  }}
  onClick={() => window.open(feature.website, "_blank")}
>
  🚀 Visit Website
</Button>

<Button
  variant="dark"
  onClick={() => window.open(feature.github, "_blank")}
  className="github-btn space-btn"
>
  <FaGithub className="bounce-icon" style={{ marginRight: "8px" }} />
  GitHub
</Button>

          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Tab.Pane>


<Tab.Pane eventKey="UI/UX Design">
  <Row>
    {[
      {
        title: "Niagahoster's UI/UX Design",
        text: "Designing intuitive wireframes and prototypes.",
        category: "UI/UX Design",
        image: require("../assets/portfolio/Niagahoster.jpeg"),
        website:
          "https://www.behance.net/gallery/160966459/UIUX-Case-Study-Redesign-of-Niagahoster-Checkout-Page", // ✅ link khusus
      },
      {
        title: "Qword's UI/UX Design",
        text: "Designing intuitive wireframes and prototypes.",
        category: "UI/UX Design",
        image: require("../assets/portfolio/Qwords.jpeg"),
        website:
          "https://www.behance.net/gallery/196734381/Redesign-Login-Page-QWORDS?tracking_source=project_owner_other_projects", // ✅ link khusus
      },
    ].map((feature, index) => (
      <Col xs={12} md={6} className="mb-4" key={index}>
        <Card className="text-center p-3 shadow-sm bg-dark text-light border-light">
          <Card.Body>
            <img
              src={feature.image}
              alt={feature.title}
              className="img-fluid mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
              onClick={() => window.open(feature.image, "_blank")} // ✅ buka tab baru
            />
            <Card.Title>{feature.title}</Card.Title>
            <Card.Text>{feature.text}</Card.Text>

            {/* ✅ Tombol Visit Website */}
            <Button
              style={{
                background:
                  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // nuansa space
                border: "none",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 191, 255, 0.6)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow =
                  "0 0 20px rgba(138, 43, 226, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 0 10px rgba(0, 191, 255, 0.6)";
              }}
              onClick={() => window.open(feature.website, "_blank")}
            >
              🚀 Visit Website
            </Button>
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
    background: rgba(30, 144, 255, 0.3); /* semi-transparent warna biru */
    color: white;
    border: 1px solid white; /* opsional supaya terlihat aktif */
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
  position: relative;
  overflow: hidden;
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
