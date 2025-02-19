import React, { useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CutNavbar({ scrollToForm }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // حذف التوكين
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/ar/thumb/2/21/Al_Ahly_SC_logo_23.svg/1200px-Al_Ahly_SC_logo_23.svg.png" 
            alt="شعار الأهلي" 
            width="60" 
            height="60" 
            style={{ marginRight: "10px" }} 
          />
          ALAHLY
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/about">من نحن</Nav.Link>
            <Nav.Link onClick={scrollToForm}>اتصل بنا</Nav.Link>
            <Button variant="danger" onClick={handleLogout} className="ms-3">تسجيل خروج</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CutNavbar;
