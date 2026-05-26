import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react'

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
              <Navbar.Brand href="#home">InfoSentinel News</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">business</Nav.Link>
                <Nav.Link href="#pricing">entertainment</Nav.Link>
                <Nav.Link href="#pricing">general</Nav.Link>
                <Nav.Link href="#pricing">health</Nav.Link>
                <Nav.Link href="#pricing">science</Nav.Link>
                <Nav.Link href="#pricing">sports</Nav.Link>
                <Nav.Link href="#pricing">technology</Nav.Link>
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
