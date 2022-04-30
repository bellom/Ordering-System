import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "components/LandingPage";
import reportWebVitals from "./reportWebVitals";
import { LoginPage } from "components/LoginPage";
import { LoginPageAdmin } from "components/LoginPageAdmin";
import { HomePageAdmin } from "components/HomePageAdmin";
import { HomePageUser } from "components/HomePageUser";
import { ProductPage } from "components/ProductPage";
import { CustomerPage } from "components/CustomerPage";
import { EmployeePage } from "components/EmployeePage";
import { OrderPage } from "components/OrderPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminlogin" element={<LoginPageAdmin />} />
        <Route path="/admin" element={<HomePageAdmin />} />
        <Route path="/user" element={<HomePageUser />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();