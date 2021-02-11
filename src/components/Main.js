import React from "react";
import MoviesGrid from "./MoviesGrid";
import { Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container id="cont">
      <Row md={2} lg={5}>
        <MoviesGrid />
      </Row>
    </Container>
  );
};

export default Main;
