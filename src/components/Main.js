import React from "react";
import MoviesGrid from "./MoviesGrid";
// import MoviePage from "./MoviePage";
import { Container, Row } from "react-bootstrap";
// import { Route } from "react-router-dom";

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
