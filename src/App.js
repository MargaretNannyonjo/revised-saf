import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import Authentication from "./components/Authenticaton";
import SignUp from "./components/SignUp";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));
  const currentUser = false;

  const requireAuth = ({ Children }) => {
    return currentUser ? Children : <Navigate to="/authentication" />;
  };
  return (
    <div className="App">
      <Router>
        <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/authentication"
            element={<Authentication setIsAuth={setIsAuth} />}
          />
          <Route exact path="/" element={<Home />} />
          <Route
            path="/blog"
            element={
              <requireAuth>
                <Blog isAuth={isAuth} />
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
          <Route path="/contact" element={<Footer />} />

          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
