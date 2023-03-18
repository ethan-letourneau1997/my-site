import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import marchMadnessIpad from "../images/png/march-madness-horizontal-ipad.png";
// import bootstrap from "../images/svg/bootstrap.svg";
// import css from "../images/svg/css.svg";
// import django from "../images/svg/django.svg";
// import postgres from "../images/svg/postgresql.svg";
// import python from "../images/svg/python.svg";
// import html from "../images/svg/html.svg";

function Projects() {
  return (
    <Container fluid className="Projects">
      <Row className="text-center pt-5">
        <h2>What have i made?</h2>
      </Row>
      <Row className="pt-5">
        <Col className="text-center">
          <h3>March Madness</h3>
          <p className="italic">Active Users: 18</p>

          <p>
            Transformed a clients approach to tracking their fantasy league.
          </p>
          <Button>Project Details</Button>
          <Button>Demo</Button>
          {/* <Container>
            <Row>
              <Col xl={6}>
                <Card>
                  <Card.Header>Draft</Card.Header>
                  <Card.Text>
                    Users can create a group and draft out of their own gropu of
                    players.
                  </Card.Text>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <Card.Header>Standings</Card.Header>
                  <Card.Text>
                    Up to date scores allow users to see their standings within
                    their grop or overall.
                  </Card.Text>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <Card.Header>Scalability</Card.Header>
                  <Card.Text>
                    Each group drafts out of their own player pool. This allows
                    for any number of users to participate.
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={django} alt="" />
                </div>
              </Col>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={python} alt="" />
                </div>
              </Col>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={postgres} alt="" />
                </div>
              </Col>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={bootstrap} alt="" />
                </div>
              </Col>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={html} alt="" />
                </div>
              </Col>
              <Col xl={2}>
                <div className="w-50 h-100 d-flex align-items-center">
                  <img className="img-fluid" src={css} alt="" />
                </div>
              </Col>
            </Row>
          </Container> */}
        </Col>

        <Col>
          <img src={marchMadnessIpad} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
