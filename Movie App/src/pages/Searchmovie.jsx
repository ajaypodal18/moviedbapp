// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import MovieCard from "../components/MovieCard";

// const Searchmovie = () => {
//   const location = useLocation();
//   const [data, setData] = useState([]);
//   console.log(data);
  
  
//   // console.log(location.search.slice(3));

//   const searchData = async () => {
//     try {
//       const response = await axios.get(`search/movie`, {
//         params: {
//           query: location?.search?.slice(3),
//           page: 1
//         },
//       });
//       setData((preve) => {     
//         return [...preve, ...response.data.results];
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     searchData();
//   }, [location?.search]);

//   return (
//     <Container>
//       <Row className="m-5" xs={1} md={2} xl={4}>
//         {data.map((searchData, index) => (
//           <MovieCard data={searchData} key={index} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Searchmovie;
