
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <div>
      <h1>Firebase Auth App</h1>
      {user ? (
        <div>
          <p>Logged in as: {user.email}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setMode("login")}>Login</button>
          <button onClick={() => setMode("signup")}>Signup</button>
          {mode === "login" ? (
            <Login onAuth={setUser} />
          ) : (
            <Signup onAuth={setUser} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
