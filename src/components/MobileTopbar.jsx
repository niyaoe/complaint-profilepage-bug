import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";
import "../styles/MobileTopbarXP.css";   // <<--- EXTERNAL CSS

const MobileTopbar = () => {
  return (
    <Navbar
      fixed="top"
      className="mobile-xp-topbar d-flex d-md-none justify-content-between align-items-center px-3 py-2"
    >
      <Container fluid className="d-flex justify-content-between align-items-center px-0">

        {/* Left side XP Title */}
        <Navbar.Brand className="mobile-xp-title fw-bold m-0 fs-5">
          Its Our Planet
        </Navbar.Brand>

        {/* Right side XP Icon */}
        <NavLink to="/settings" className="mobile-xp-icon-link">
          <Gear size={25} className="mobile-xp-icon" />
        </NavLink>

      </Container>
    </Navbar>
  );
};

export default MobileTopbar;
