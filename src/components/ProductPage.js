import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";

export function ProductPage() {
  const [products, setProducts] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products");

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
              Find list of our products below
            </h3>
          </Fade>
          <hr />
          <table>
            <thead>
              <tr>
                <th scope="col">ProductID</th>
                <th scope="col">ProductName</th>
                <th scope="col">UnitPrice</th>
                <th scope="col">QuantityPerUnit</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((row) => {
                  return (
                    <tr>
                      <td>{row.ProductID}</td>
                      <td>{row.ProductName}</td>
                      <td>{row.UnitPrice}</td>
                      <td>{row.QuantityPerUnit}</td>
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
