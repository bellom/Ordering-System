import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";
import MaterialTable from "material-table";

export function ProductPage() {
  const [products, setProducts] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products");
    const data = res.data;
    setProducts(data);
    return data;
  };

  useEffect(async () => {
    await fetchProducts();
    setIsLoading(false);
  }, []);

  const columns = [
    { title: "Product ID", field: "ProductID" },
    { title: "Product Name ", field: "ProductName" },
    { title: "Unit Price", field: "UnitPrice" },
    { title: "Quantity PerUnit", field: "QuantityPerUnit" },
  ];

  return isLoading ? (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>Loading list of our Products.....</h3>
          </Fade>
        </div>
      </div>
    </header>
  ) : (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>Find list of our Products below</h3>
          </Fade>
          <hr />
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={columns}
              data={products}
              title="Product Directory"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
