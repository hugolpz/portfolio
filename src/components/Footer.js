import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gh.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="name" size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginTop: "30px" }}>
              <a target="_blank" href="https://www.linkedin.com/in/eliasef/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/EliasEF" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>2023 © Elias Ferreira. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
