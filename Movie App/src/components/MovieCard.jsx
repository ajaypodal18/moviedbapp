import React from "react";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";

const MovieCard = ({ data }) => {
  const imageURL = useSelector((state) => state.moviedbData.imageBaseUrl);
  return (
    <div>
      <div>
        <img src={imageURL + data.backdrop_path} width={200} />
      </div>
      <h6>{data.title}</h6>
      <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
