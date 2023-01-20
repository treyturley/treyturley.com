import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Trey Turley
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to='#Resume'>
              Resume
            </Nav.Link>

            <Nav.Link as={Link} to='#Contact'>
              Contact
            </Nav.Link>

            <NavDropdown title='Project Details' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/projects/skull-king'>
                Skull King
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/projects/yahtzee'>
                Yahtzee
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/projects/fse-job-finder'>
                FSE Job Finder
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
