import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import AqilImage from "../assets/Aqil.jpeg"; // ✅ Import gambar


export default function Hero() {
  const titles = ["Front End Developer", "UI/UX Design", "Private Teacher"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // mulai fade out
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // fade in
      }, 500); // durasi fade out
    }, 2500); // ganti teks tiap 2.5 detik
    return () => clearInterval(interval);
  }, []);

  const leadStyle = {
    fontSize: "24px",
    fontWeight: 500,
    transition: "opacity 0.5s ease-in-out",
    opacity: fade ? 1 : 0,
  };
  
  return (
    <div className="bg-transparent text-light text-center text-md-start py-5">
      <Container>
        <Row className="align-items-center">
          {/* Kolom Kiri */}
          <Col xs={12} md={6}>
          <h1
  style={{
    fontFamily: "'Orbitron', sans-serif", // font futuristik/space
    fontWeight: "700",
    fontSize: "clamp(2rem, 3vw, 3rem)", // ⬅ responsif: minimal 2rem, maksimal 3rem
    color: "#fff",
    textShadow: `
      0 0 5px #fff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff
    `,
    whiteSpace: "nowrap" // ⬅ menahan teks agar tetap 1 baris

  }}
>
  Welcome to My Portfolio
</h1>

            <p style={{ fontSize: "24px", fontWeight: 500 }}>
  I'am{" "}
  <span style={leadStyle}>{titles[titleIndex]}</span>
</p>


<Button
  variant="primary"
  style={{
    borderRadius: "50px",
    padding: "6px 16px",
    fontSize: "14px",
    background: "linear-gradient(45deg, #0b3d91, #6a0dad, #1e90ff)",
    color: "#fff",
    border: "none",
    boxShadow: "0 0 10px rgba(106,13,173,0.6), 0 0 20px rgba(30,144,255,0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 0 15px rgba(106,13,173,0.8), 0 0 25px rgba(30,144,255,0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 0 10px rgba(106,13,173,0.6), 0 0 20px rgba(30,144,255,0.4)";
  }}
  onClick={() => window.open("https://drive.google.com/file/d/1deSzjS5Io9iZSql-DjJSoINMCX4VW60j/view?usp=sharing", "_blank")}
>
  View My Resume
</Button>



          </Col>

          {/* Kolom Kanan */}
          <Col xs={12} md={6} className="text-center">
  <div style={{ position: "relative", display: "inline-block" }}>
    <img
      src={AqilImage}
      alt="Aqil Maulana"
      className="img-fluid rounded-circle"
      style={{
        width: "200px",
        height: "200px",
        objectFit: "cover",
        position: "relative",
        zIndex: 2
      }}
    />
    {/* Lingkaran Dekoratif */}
    <div>
      {/* Style global untuk animasi */}
      <style>
  {`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
</style>

<div
  style={{
    width: "100px",
    height: "100px",
    background: `
      radial-gradient(circle at 30% 30%, #f4e2d8, #c2b280, #6b4226),
      radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4), transparent),
      repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.05) 0px,
        rgba(255,255,255,0.05) 2px,
        transparent 2px,
        transparent 4px
      )
    `,
    backgroundSize: "100% 100%, 100% 100%, 200% 100%",
    borderRadius: "50%",
    position: "absolute",
    bottom: "0",
    right: "-30px",
    zIndex: 1,
    animation: "planetMove 20s linear infinite, planetLight 5s ease-in-out infinite",
    boxShadow: "0 0 20px rgba(255,255,255,0.2)"
  }}
></div>


    </div>

  </div>
</Col>


        </Row>
      </Container>
      <style>
{`
@keyframes planetMove {
  0% { background-position: 0 0, 0 0, 0 0; }
  100% { background-position: 0 0, 0 0, 200% 0; }
}

@keyframes planetLight {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.05); }
}
`}
</style>
    </div>
  );
}
