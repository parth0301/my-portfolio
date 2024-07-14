import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import culinashare from "../../Assets/Projects/Culinashare1.png";
import sportify from "../../Assets/Projects/SportifyEdu1.png";
import grievance from "../../Assets/Projects/grievance1.png";
import simulated from "../../Assets/Projects/simulated1.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={culinashare}
              isBlog={false}
              title="Culina Share"
              description="Culina Share is a web application designed to elevate your culinary journey by offering a seamless platform to discover, search, and save your favorite recipes from various cuisines. Powered by modern technologies, Culina Share provides a user-friendly interface and robust functionalities to enhance your cooking experience. The project consists of features such as: Discovering, Searching, Saving as Favorites and Viewing all the Favorite recipes."
              ghLink="https://github.com/parth0301/culina-share"
              demoLink="https://culina-share-0301.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grievance}
              isBlog={false}
              title="Grievance System"
              description="The Python-based automatic particular seat grievance registration system facilitates the filing of complaints about sitting in public or private settings. Users can report problems quickly with this method, and they will be documented right away for future adjustment. For each seat, a QR Code would be allotted, which could be scanned in order to submit a complaint via the internet."
              ghLink="https://github.com/parth0301/grievance-system"
              demoLink="https://grievance-form.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportify}
              isBlog={false}
              title="SportifyEdu"
              description="Simplifies the planning and implementation of sporting events, guaranteeing a seamless and prosperous event. Encourages involvement and the growth of talent by giving organizers and participants practical information. Creates an effective and scalable system for overseeing athletic events at different levels."
              ghLink="https://github.com/parth0301/SportifyEdu"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulated}
              isBlog={false}
              title="Simulated 2-Factor Authentication"
              description="This Python project, focuses on two-factor authentication (2FA). Prior to deployment, it generates random OTPs expiring in 60 seconds. Users log in with a username and password, then navigate to the 2FA page to input the displayed OTP. In the deployed version, OTPs will be sent to registered mobile numbers and email addresses. After successful verification, users are directed to the home page. The project includes a logout button, returning users to the login page for subsequent sessions."
              ghLink="https://github.com/parth0301/Simulated-2-factor-authentication"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
