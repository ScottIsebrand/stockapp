import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navibar() {
  return (
    <Navbar sticky="top" bg="success" expand="md">
      <Container>
        <Nav.Link href="/">
          <h3 className="navBrand">STOCKS APP</h3>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: '100%' }}>
            <Nav.Link href="/">
              <h5 className="navTextLink">Home</h5>
            </Nav.Link>

            <Nav.Link href="/about">
              <h5 className="navTextLink">About</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
