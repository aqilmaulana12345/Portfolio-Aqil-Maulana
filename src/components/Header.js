import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-light animated-brand"
          style={{
            display: "inline-block",
            transition: "all 0.5s ease",
            transform: "scale(0.8)",
            opacity: 0,
            animation: "brandIntro 1s forwards",
          }}
        >
          Aqil Maulana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#features" className="fw-light">
              Projects
            </Nav.Link>
            <Nav.Link href="#technologies" className="fw-light">
              Technologies
            </Nav.Link>
       

            {/* Social Media Icons */}
            <Nav.Link
  href="https://www.linkedin.com/in/aqil-maulana-29b33a211/"
  target="_blank"
  rel="noopener noreferrer"
  className="ms-2"
  style={{ color: "white", fontWeight: "bold" }}
>
  <FaLinkedin size={20} />
</Nav.Link>

            <Nav.Link
  href="https://www.instagram.com/aqilmaulanaaa/?next=%2F"
  target="_blank"
  rel="noopener noreferrer"
  className="ms-2"
  style={{ color: "white", fontWeight: "bold" }}
>
  <FaInstagram size={20} />
</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Global style untuk animasi */}
      <style>
        {`
          @keyframes brandIntro {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .animated-brand:hover {
            color: #0d6efd;
            transform: scale(1.1) translateY(-3px);
          }
        `}
      </style>
    </Navbar>
  );
}
