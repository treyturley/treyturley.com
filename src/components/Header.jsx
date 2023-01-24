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
            <Nav.Link
              as='a'
              href='https://my.indeed.com/p/treyt-q42vckn'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as='a'
              href='mailto:tturley08+contact@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Contact
            </Nav.Link>
            <NavDropdown title='Project Details' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/projects/skull-king-scorecard'>
                Skull King
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/projects/fse-data-feed'>
                FSE Data Feed
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/projects/yahtzee-scorecard'>
                Yahtzee
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/skullking-scorecard'>
              Skull King Scorecard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
