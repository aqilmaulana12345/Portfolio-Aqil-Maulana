import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"; // ⬅️ tambahin FaWhatsapp


export default function Footer() {
  return (
    <footer className="bg-transparent text-light py-4 mt-5" style={{ position: "relative", overflow: "hidden" }}>
      {/* Bumi CSS di tengah */}
      <div
  style={{
    position: "absolute",
    bottom: "-150px", // sebagian berada di bawah footer
    left: "50%",
    transform: "translateX(-50%)",
    width: "150vw",
    height: "220px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, #0b3d91, #1e90ff, #0b3d91)",
    boxShadow: "inset -20px -20px 60px rgba(255,255,255,0.2), 0 0 30px rgba(0,0,0,0.5)",
    zIndex: 0,
    overflow: "hidden",
  }}
>
  {/* Benua hijau acak */}
  <div style={{
    position: "absolute",
    top: "20px",
    left: "10%",
    width: "25%",
    height: "40px",
    background: "#2e8b57",
    borderRadius: "40% 60% 50% 50%",
  }}></div>
  <div style={{
    position: "absolute",
    top: "50px",
    left: "40%",
    width: "30%",
    height: "50px",
    background: "#3cb371",
    borderRadius: "50% 30% 40% 60%",
  }}></div>
  <div style={{
    position: "absolute",
    top: "30px",
    left: "75%",
    width: "20%",
    height: "35px",
    background: "#228b22",
    borderRadius: "60% 40% 50% 30%",
  }}></div>
  <div style={{
    position: "absolute",
    top: "10px",
    left: "60%",
    width: "15%",
    height: "25px",
    background: "#006400",
    borderRadius: "50% 50% 40% 60%",
  }}></div>
</div>


<Container style={{ position: "relative", zIndex: 1 }}>
  <Row className="mb-3">
    <Col className="text-center">
      <p className="mb-1">🚀 Keep reaching for the stars! | Build, design, create.</p>
      <p className="mb-0">
        Follow me on:{" "}
        <a href="https://github.com/aqilmaulana12345?tab=repositories" target="_blank" rel="noreferrer" className="text-light mx-2">
          <FaGithub size={20} className="bounce-icon" style={{ marginRight: "5px" }} /> GitHub
        </a> | 
        <a href="https://www.linkedin.com/in/aqil-maulana-29b33a211/" target="_blank" rel="noreferrer" className="text-light mx-2">
          <FaLinkedin size={20} className="bounce-icon" style={{ marginRight: "5px", color: "#0A66C2" }} /> LinkedIn
        </a> | 
        <a href="https://www.instagram.com/aqilmaulanaaa/" target="_blank" rel="noreferrer" className="text-light mx-2">
          <FaInstagram size={20} className="bounce-icon" style={{ marginRight: "5px", color: "#E1306C" }} /> Instagram
        </a> | 
        <a href="https://wa.me/6281252740362" target="_blank" rel="noreferrer" className="text-light mx-2">
          <FaWhatsapp size={20} className="bounce-icon" style={{ marginRight: "5px", color: "#25D366" }} /> WhatsApp
        </a>
      </p>
    </Col>
  </Row>
  <Row>
    <Col className="text-center">
      <small>© {new Date().getFullYear()} MyLanding. All rights reserved.</small>
    </Col>
  </Row>
</Container>

    </footer>
  );
}
