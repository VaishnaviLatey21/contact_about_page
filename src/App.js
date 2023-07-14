// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Contact from "./Component/contact/contact";
import About from "./Component/about/about";

function App() {
  return (
    <Router>
      <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/blogs' element={<Blogs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
