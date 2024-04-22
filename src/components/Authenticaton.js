import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Authentication = ({ setIsAuth }) => {
  let [error, setError] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle authentication errors
        if (error.code === "auth/popup-closed-by-user") {
          console.error("Authentication popup was closed by the user.");
        } else {
          // Other authentication errors
          console.error("Error signing in with Google:", error.message);
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
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
          <p>Sign In with Google to continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
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
            LOGIN
          </button>
          {error && <span>Wrong email or password!</span>}
          <p>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Authentication;
