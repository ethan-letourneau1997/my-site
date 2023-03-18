import { useRef } from "react";
import { Container, Row, Button } from "react-bootstrap";
import checkBox from "../images/png/checkbox.png";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  const actionRef = useRef(null);

  function scrollToElementWithOffset(ref, offset) {
    const elementPosition = ref.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="Home">
      <Container className="landing-page">
        <Row className="text-center h-100 d-flex align-items-center">
          <div className="title-wrapper">
            <h1>
              I'm <span className="header-name">Ethan Letourneau</span>
            </h1>
            <h1>and i make websites</h1>
            <Button
              onClick={() => scrollToElementWithOffset(actionRef.current, 50)}
              variant="outline-light mt-5"
              size="lg"
            >
              learn more.
            </Button>
          </div>
        </Row>
      </Container>
      <div ref={actionRef} id="Skills">
        <Skills />
      </div>
      <Projects />
    </div>
  );
}

export default Home;
