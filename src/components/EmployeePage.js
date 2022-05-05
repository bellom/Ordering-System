import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";

export function EmployeePage() {
  const [products, setProducts] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/employees");

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
              Find list of our Employees below
            </h3>
          </Fade>
          <hr />
          <table>
            <thead>
              <tr>
                <th scope="col">EmployeeID</th>
                <th scope="col">LastName</th>
                <th scope="col">FirstName</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((row) => {
                  return (
                    <tr>
                      <td>{row.EmployeeID}</td>
                      <td>{row.LastName}</td>
                      <td>{row.FirstName}</td>
                      <td>{row.Title}</td>
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
