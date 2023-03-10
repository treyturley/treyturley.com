import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Skullking from './pages/projects/Skullking';
import FSEJobFinder from './pages/projects/FSEJobFinder';
import Yahtzee from './pages/projects/Yahtzee';
import AWSMigration from './pages/projects/AWSMigration';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column content'>
        <Header />
        <Container className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/projects/skull-king-scorecard'
              element={<Skullking />}
            />
            <Route path='/projects/fse-data-feed' element={<FSEJobFinder />} />
            <Route path='/projects/yahtzee-scorecard' element={<Yahtzee />} />
            <Route path='/projects/aws-migration' element={<AWSMigration />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
