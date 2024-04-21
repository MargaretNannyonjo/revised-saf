import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import Authentication from "./components/Authenticaton";
import SignUp from "./components/SignUp";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const currentUser = false;

  const requireAuth = ({ Children }) => {
    return currentUser ? Children : <Navigate to="/authentication" />;
  };
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route exact path="/" element={<Home />} />
          <Route
            path="/blog"
            element={
              <requireAuth>
                <Blog />
              </requireAuth>
            }
          />
          <Route
            path="/destination"
            element={
              <requireAuth>
                <Destination />
              </requireAuth>
            }
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/recipes"
            element={
              <requireAuth>
                <Recipes />
              </requireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
