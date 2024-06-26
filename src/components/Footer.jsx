import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-muted px-2'>&copy; {new Date().getFullYear()} Trey Turley</p>

        <ul className='nav col-md-3'>
          <li className='nav-item my-nav'>
            <a href='/' className='nav-link px-2 text-muted '>
              Home
            </a>
          </li>
          {/* <li className='nav-item'>
            <a
              href='/resume/TreyTurley_Resume2.pdf'
              target='_blank'
              rel='noreferrer'
              className='nav-link px-2 text-muted'
            >
              Resume
            </a>
          </li> */}
          {/* <li className='nav-item'>
            <a
              href='mailto:tturley08+contact@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='nav-link px-2 text-muted'
            >
              Contact
            </a>
          </li> */}
          <li className='nav-item'>
            <a
              href='https://treyturley.com/skullking-scorecard'
              className='nav-link px-2 text-muted'
            >
              Skull King Scorecard
            </a>
          </li>
        </ul>
        <a
          href='https://www.flaticon.com/free-icons/portal'
          title='portal icons'
          className='attribution-link text-muted px-2'
        >
          Portal icons created by Pixel perfect - Flaticon
        </a>
      </footer>
    </Container>
  );
}

export default Footer;
