import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [visits, setVisits] = React.useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home visits={visits} setVisits={setVisits} />}
          />
          <Route path="/about" element={<About visits={visits} />} />
          <Route path="/contact" element={<Contact visits={visits} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

