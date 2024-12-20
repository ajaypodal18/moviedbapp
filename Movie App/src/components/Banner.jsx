import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/esm/Row";

const Banner = () => {
  const movieData = useSelector((state) => state.moviedbData.movieData);
  const imageURL = useSelector((state) => state.moviedbData.imageBaseUrl);
    // console.log("response",movieData);

  return (
    <Container>
      <Row>
        {movieData.map((data, index) => {
          return (
            <div key={index}>
              <img src={imageURL + data.backdrop_path} width={500} />
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Banner;
