import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "components/LandingPage";
import reportWebVitals from "./reportWebVitals";
import { LoginPage } from "components/LoginPage";
import { LoginPageAdmin } from "components/LoginPageAdmin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminlogin" element={<LoginPageAdmin />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
