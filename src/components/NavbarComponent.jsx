import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbarcomponent extends Component {
  render() {
    return (
      <div>
        <>
          {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
          {/* <br /> */}
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">InfoSentinel News</Navbar.Brand>
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>

                <Link className="nav-link" to="/business">Business</Link>

                <Link className="nav-link" to="/entertainment">Entertainment</Link>

                <Link className="nav-link" to="/">General</Link>

                <Link className="nav-link" to="/health">Health</Link>

                <Link className="nav-link" to="/science">Science</Link>

                <Link className="nav-link" to="/sports">Sports</Link>

                <Link className="nav-link" to="/technology">Technology</Link>
              </Nav>
            </Container>
          </Navbar>

          {/* <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
        </>
      </div>
    )
  }
}

export default Navbarcomponent
