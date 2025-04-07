import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './Responsive/nav.css';
import Nav from "./Layout/Nav";
import Home from "./Layout/Home";
import Shop from "./Layout/Shop";
import About from "./Layout/About";

function App() {
  return(
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/About" element={<About />} />
    </Routes>

  </Router>
  )
}

export default App;
