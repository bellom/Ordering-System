import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";
import moment from 'moment'


export function OrderPage() {
  const [products, setProducts] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/orders");

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
              Find list of our Orders below
            </h3>
          </Fade>
          <hr />
          <table>
            <thead>
              <tr>
                <th scope="col">OrderID</th>
                <th scope="col">CustomerID</th>
                <th scope="col">OrderDate</th>
                <th scope="col">ShipName</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((row) => {
                  return (
                    <tr>
                      <td>{row.OrderID}</td>
                      <td>{row.CustomerID}</td>
                      <td>{moment(row.OrderDate).format("MMMM D, YYYY")}</td>
                      <td>{row.ShipName}</td>
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
