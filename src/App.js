import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import Authentication from "./components/Authenticaton";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
