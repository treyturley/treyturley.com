import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Yahtzee from './pages/projects/Yahtzee';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/yahtzee' element={<Yahtzee />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
