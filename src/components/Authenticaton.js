import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Authentication = () => {
  let [error, setError] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
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
          <button type="button" className="login">
            LOGIN
          </button>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </>
  );
};
export default Authentication;
