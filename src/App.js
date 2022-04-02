import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import About from './Pages/about';

import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
              <ul className="App-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
