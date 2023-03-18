import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import checkBox from "../images/png/checkbox.png";

function Skills() {
  //   Fade in background color on scroll

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTopY = skillsRef.current.offsetTop;
      const viewportBottomY = window.innerHeight + window.scrollY;
      const distanceFromTop = viewportBottomY - elementTopY;
      const distanceFromTopClamped = Math.max(
        0,
        Math.min(distanceFromTop, window.innerHeight)
      );
      const percentageFromTop = distanceFromTopClamped / window.innerHeight;
      setBackgroundColor(`rgba(3, 5, 7, ${percentageFromTop * 0.7})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      ref={skillsRef}
      className="Skills "
      style={{ backgroundColor }}
    >
      <Row className="text-center pt-5 pb-5">
        <h2>What can i do?</h2>
      </Row>
      <Row className="pb-5 pt-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mb-4"
        >
          {/* REST API */}
          <Card id="Skills" className="web-card" style={{ width: "20rem" }}>
            <Card.Body className="p-4">
              <Card.Title className="pb-4 pt-2">Web</Card.Title>
              <Card.Subtitle>
                Design Modern Responsive web applications
              </Card.Subtitle>
              <hr className="hr my-3" />
              <div className="d-flex flex-column gap-1">
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  HTML, CSS, JavaScript
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  React
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Django, Node, Flask
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Rest API
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Responsive Design
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mb-4 "
        >
          {/* REST API */}
          <Card className="code-card" style={{ width: "20rem" }}>
            <Card.Body className="p-4">
              <Card.Title className="pb-4 pt-2">Code</Card.Title>
              <Card.Subtitle>
                Knowledge in a variety of language and technologies
              </Card.Subtitle>
              <hr className="hr my-3" />
              <div className="d-flex flex-column gap-1">
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Python
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Java
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />C
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Git
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Docker
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className="d-flex justify-content-center mb-4 "
        >
          {/* REST API */}
          <Card className="data-card" style={{ width: "20rem" }}>
            <Card.Body className="p-4">
              <Card.Title className="pb-4 pt-2">Data</Card.Title>
              <Card.Subtitle>
                Experience working with large amounts of data
              </Card.Subtitle>
              <hr className="hr my-3" />
              <div className="d-flex flex-column gap-1">
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Database Design
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Database Integration
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  SQL
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Data Analytics
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src={checkBox} height="30" alt="" />
                  Tableau
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
