import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bgImage from "../assets/part2bg.jpg";
import "../styles/xpPart2.css"; // <-- XP styled CSS

const Part2 = () => {
  return (
    <section
      className="xp-part2-section py-5 text-center"
      
    >
      <Container>
        <h2 className="xp-part2-title fw-bold mb-5 text-uppercase">
          How It Works
        </h2>

        <Row>
          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="xp-card h-100">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
                className="xp-card-img"
              />
              <Card.Body>
                <div className="xp-icon">🏙️</div>
                <Card.Title className="xp-card-title">Find Your City</Card.Title>
                <Card.Text className="xp-card-text">
                  Easily search for your city using the search bar or select it
                  from our interactive map.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="xp-card h-100">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60"
                className="xp-card-img"
              />
              <Card.Body>
                <div className="xp-icon">📰</div>
                <Card.Title className="xp-card-title">Browse Reports</Card.Title>
                <Card.Text className="xp-card-text">
                  View a list or map of public complaints and feedback submitted
                  by residents of cities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="xp-card h-100">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60"
                className="xp-card-img"
              />
              <Card.Body>
                <div className="xp-icon">📘</div>
                <Card.Title className="xp-card-title">
                  Learn Before You Join
                </Card.Title>
                <Card.Text className="xp-card-text">
                  Read public updates from city officials and see how issues are
                  handled — no account required.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Part2;
