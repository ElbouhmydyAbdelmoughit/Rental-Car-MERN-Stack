import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Authorisation from "../Authorisation/Authorisation";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const access = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="md">
      <Container className="text-black">
        <Navbar.Brand href="/" className="fw-bold fs-3">
          <span style={{ color: "red" }}>CAR RENTAL</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "black !important" }}>
            <Nav.Link className="text-black" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-black" href="#about">
              AboutUs
            </Nav.Link>
            <Nav.Link className="text-black" href="#cars">
              Cars
            </Nav.Link>
          </Nav>
          {!access ? (
            <Nav className="ms-auto">
              <Nav.Link
                className="rounded"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  padding: "4px 20px",
                }}
              >
                <Link
                  to={"Login"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link
                className="rounded"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  padding: "4px 20px",
                }}
              >
                <button
                  onClick={logout}
                  className="text-white border-0 bg-transparent"
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
