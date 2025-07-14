import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started programming since I was in 10th grade, and it has been a thrilling journey ever since! 
              <br />
              <br />
              I am proficient in languages such as 
              <i>
                <b className="purple"> JavaScript and Python. </b>
              </i>
              These two languages have allowed me to explore diverse realms of development, ranging from 
              building intuitive web apps to automating complex tasks and data analysis.
              <br />
              <br />
              My field of interests extends to creating
              <i>
                <b className="purple"> Robust and User-Centric Solutions</b>
              </i> for real-world problems and diving into the intricacies of
              {" "}
                <b className="purple">Money Markets</b>.
              I find the world of finance fascinating and continuously seek opportunities to merge my technical skills with financial systems.
              <br />
              <br />
              Over the years, I have honed my abilities in full-stack development, particularly focusing on 
              <b className="purple">MERN Stack</b> (MongoDB, Express.js, React.js, and Node.js). 
              By integrating this powerful stack, I ensure that every solution I develop is optimized for performance, scalability, and user experience. 
              My passion lies in creating responsive and fast web applications that are built to last, whether it's for startups or enterprise-level solutions.
              <br />
              <br />
              When I'm not coding, you'll likely find me exploring new technologies, reading books on personal finance, or taking long walks while brainstorming new ideas. I believe in the power of continuous learning and staying curious, which helps me to keep evolving as both a developer and a person.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me on:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/parth0301"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/parthdesai03/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/parthhhdesai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
