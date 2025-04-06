import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './Responsive/nav.css';
import Nav from "./Layout/Nav";
import Home from "./Layout/Home";
import Shop from "./Layout/Shop";

function App() {
  return(
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop />} />
    </Routes>

  </Router>
  )
}

export default App;
