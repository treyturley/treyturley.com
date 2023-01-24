import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Yahtzee from './pages/projects/Yahtzee';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column content'>
        <Header />
        <Container className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/yahtzee' element={<Yahtzee />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
