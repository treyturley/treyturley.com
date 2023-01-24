import { Container } from 'react-bootstrap';

function Footer() {
  return (
    // TODO: finish footer links
    <Container>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-muted'>&copy; 2023 Trey Turley</p>

        <ul className='nav col-md-4 justify-content-end flex-nowrap'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Resume
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted text-nowrap'>
              Project Details
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted text-nowrap'>
              Skull King Scorecard
            </a>
          </li>
        </ul>
        <a
          href='https://www.flaticon.com/free-icons/portal'
          title='portal icons'
        >
          Portal icons created by Pixel perfect - Flaticon
        </a>
      </footer>
    </Container>
  );
}

export default Footer;
