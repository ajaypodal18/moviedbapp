import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function NavScrollExample() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    navigate(`/search?q=${searchInput}`)
  },[searchInput])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
    
  return (
    <Navbar expand="lg" className="bg-dark-subtle">
      <Container>
        <Link className="nav-head" to={"/"}>
          MovieDB
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Link className="m-1" to={"/"}>
              Popular
            </Link>
            <Link className="m-1" to={"/top-rated"}>
              Top Rated
            </Link>
            <Link className="m-1" to="/upcoming">
              Upcoming
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Movie Name"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchInput(e.target.value)}
              value={searchInput}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
