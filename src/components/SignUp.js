import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Authentication = () => {
  let [error, setError] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <>
      <div className="user-auth">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login">
            SIGNUP
          </button>
          <p>
            Already have an account? <Link to="/authentication">Login</Link>
          </p>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </>
  );
};
export default Authentication;
