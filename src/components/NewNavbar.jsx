import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NewNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🖥️ Desktop XP Toolbar */}
      <Navbar
        fixed="top"
        className="shadow-sm py-2 d-none d-md-flex"
        style={{
          background: "linear-gradient(180deg,#ece9d8 0%,#d4d0c8 100%)",
          borderBottom: "2px solid #808080",
          boxShadow: "inset 0 1px 0 #fff, inset 0 -1px 0 #808080",
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Navbar.Brand
            onClick={() => navigate("/mainpage")}
            className="fw-bold fs-5"
            style={{
              cursor: "pointer",
              color: "#000",
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            JAREESHA.KOPP
          </Navbar.Brand>

          {/* Links */}
          <Nav className="d-flex flex-row">
            {[
              { to: "/mainpage", text: "Home" },
              { to: "/myreports", text: "My Report" },
              { to: "/reports", text: "Reports" },
              { to: "/contact", text: "Contact" },
            ].map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                className="nav-link mx-2"
                style={{
                  color: "#000",
                  fontWeight: 600,
                  background: "#d4d0c8",
                  border: "2px solid #808080",
                  borderRightColor: "#fff",
                  borderBottomColor: "#fff",
                  borderRadius: "3px",
                  padding: "3px 10px",
                  boxShadow: "inset -1px -1px 0 #fff, inset 1px 1px 0 #808080",
                  fontFamily: "Tahoma, sans-serif",
                  textDecoration: "none",
                }}
              >
                {link.text}
              </NavLink>
            ))}
          </Nav>

          {/* Profile Dropdown */}
          <Nav>
            <NavDropdown
              align="end"
              title={
                <span className="d-flex align-items-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    roundedCircle
                    width="35"
                    height="35"
                    style={{
                      border: "2px solid #808080",
                      background: "#d4d0c8",
                      padding: "2px",
                    }}
                  />
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={NavLink} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* 📱 Mobile XP-style Bottom Navbar */}
      <Navbar
        fixed="bottom"
        className="d-flex d-md-none justify-content-around py-2"
        style={{
          background: "linear-gradient(180deg,#ece9d8 0%,#d4d0c8 100%)",
          borderTop: "2px solid #808080",
          boxShadow:
            "inset 0 1px 0 #fff, inset 0 -1px 0 #808080, 0 -2px 6px rgba(0,0,0,0.3)",
          height: "65px",
        }}
      >
        <Nav className="w-100 d-flex justify-content-around align-items-center">
          {[
            { to: "/mainpage", icon: "bi-house-door-fill" },
            { to: "/myreports", icon: "bi-file-earmark-text-fill" },
            { to: "/reports", icon: "bi-bar-chart-line-fill" },
            { to: "/contact", icon: "bi-telephone-fill" },
            { to: "/profile", icon: "bi-person-circle" },
          ].map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className="icon-link"
              style={{
                color: "#000",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                transition: "all 0.2s ease",
                height: "100%",
              }}
            >
              <div
                className="xp-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  background: "#d4d0c8",
                  border: "2px solid #808080",
                  borderRightColor: "#fff",
                  borderBottomColor: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "inset -1px -1px 0 #fff, inset 1px 1px 0 #808080",
                }}
              >
                <i
                  className={`bi ${link.icon}`}
                  style={{
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                ></i>
              </div>
            </NavLink>
          ))}
        </Nav>
      </Navbar>

      <style>
        {`
          /* Active link XP-style glow */
          .nav-link.active {
            background: linear-gradient(180deg,#0a64ad 0%,#3a95e6 100%) !important;
            color: #fff !important;
            border: 2px solid #003c74 !important;
            box-shadow: inset 1px 1px 0 #7fbfff !important;
          }

          /* Active mobile icon */
          .icon-link.active .xp-icon {
            background: linear-gradient(180deg,#0a64ad 0%,#3a95e6 100%) !important;
            color: #fff !important;
            border-color: #003c74 !important;
            box-shadow: inset 1px 1px 0 #7fbfff !important;
            transform: scale(1.05);
          }

          .icon-link.active i {
            color: #fff !important;
          }

          @media (max-width: 767px) {
            body {
              padding-bottom: 70px;
            }
          }

          .navbar .dropdown-toggle::after {
            display: none !important;
          }
        `}
      </style>
    </>
  );
};

export default NewNavbar;
