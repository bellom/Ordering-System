import React from 'react';
import './Login.css';

export function LoginPageAdmin() {
  return (
    <div className="login-wrapper">
      <h1>Please Login as Admin</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" placeholder='Admin'/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}