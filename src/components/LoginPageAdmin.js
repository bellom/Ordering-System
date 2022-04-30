import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export function LoginPageAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    const res = await axios.post("http://localhost:3001/api/login", {
      username: username,
      password: password,
    });
    const data = res.data;
    if (data.message) {
      setLoginStatus(data.message);
    } else {
      setLoginStatus(data);
      navigate("/admin");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login-wrapper">
      <h1>Please Login as Admin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            placeholder="Admin"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h1>{loginStatus}</h1>
    </div>
  );
}
