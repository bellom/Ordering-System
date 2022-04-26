import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

export function LoginPageAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await axios.post('http://localhost:3001/api/login', {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Login as User</h1>
      <form onSubmit={login}>
        <label>
          <p>Username</p>
          <input type="text" placeholder='Admin' onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}