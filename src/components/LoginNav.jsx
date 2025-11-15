import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/xpnav.css"; // <-- External CSS (create this file)

const LoginNav = () => {
  const navigate = useNavigate();

  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  return (
    <Navbar
      fixed="top"
      expand="md"
      className="xp-navbar shadow-sm"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center px-3"
      >
        <Navbar.Brand className="xp-brand m-0">
          Its Our Planet
        </Navbar.Brand>

        <div className="d-flex gap-2 flex-shrink-0">
          <Button
            onClick={goLogin}
            className="xp-btn-login"
            size="sm"
          >
            Login
          </Button>

          <Button
            onClick={goSignup}
            className="xp-btn-signup"
            size="sm"
          >
            Sign Up
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default LoginNav;
