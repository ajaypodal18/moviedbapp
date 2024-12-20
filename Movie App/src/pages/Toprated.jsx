import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const Toprated = () => {
  const ratedMovie = useSelector((state) => state.moviedbData.topRated);

  return (
    <Container>
      <Row className="m-5" xs={1} md={2} lg={4}>
        {ratedMovie.map((data) => (
          <MovieCard key={data.id} data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Toprated;
