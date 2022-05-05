import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";

export function CustomerPage() {
  const [products, setProducts] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/customers");

    if (!res.data) {
      return <div>Loading...</div>;
    }
    const data = res.data;
    setProducts(data);
    console.log(data);
    return data
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>
              Find list of our Customers below
            </h3>
          </Fade>
          <hr />
          <table>
            <thead>
              <tr>
                <th scope="col">CustomerID</th>
                <th scope="col">CompanyName</th>
                <th scope="col">ContactName</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((row) => {
                  return (
                    <tr>
                      <td>{row.CustomerID}</td>
                      <td>{row.CompanyName}</td>
                      <td>{row.ContactName}</td>
                      <td>{row.Phone}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}
