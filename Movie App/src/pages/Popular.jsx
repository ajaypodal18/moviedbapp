import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Popular = () => {
  const movieData = useSelector((state) => state.moviedbData.movieData);

  return (
    <Container>
      <Row className="m-5" xs={1} md={2} xl={4}>
        {movieData.map((data) => (
          <MovieCard data={data} key={data.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
