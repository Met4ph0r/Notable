import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        background: "#cff9ff22",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright (2022)</Col>
          <!--&copy; Hrusikesh Kumar-->
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
