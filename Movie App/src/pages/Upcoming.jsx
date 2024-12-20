import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Upcoming = () => {
  const fmovies = useSelector((state) => state.moviedbData.upComing);

  return (
    <Container>
      <Row className="m-5" xs={1} md={3} xl={4}>
        {fmovies.map((data) => (
          <MovieCard key={data.id} data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Upcoming;
