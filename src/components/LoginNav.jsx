import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/xpLoginNav.css"; // <-- NEW XP THEME CSS

const LoginNav = () => {
  const navigate = useNavigate();

  return (
    <Navbar fixed="top" expand="md" className="xp-login-navbar">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center px-3"
      >
        {/* Brand */}
        <Navbar.Brand className="xp-login-brand">
          NexTown.in
        </Navbar.Brand>

        {/* Buttons */}
        <div className="d-flex gap-2 flex-shrink-0">
          <Button onClick={() => navigate("/login")} className="xp-login-btn">
            Login
          </Button>

          <Button onClick={() => navigate("/signup")} className="xp-signup-btn">
            Sign Up
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default LoginNav;
