import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";
import moment from "moment";
import MaterialTable from "material-table";

export function OrderPage() {
  const [orders, setOrders] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/orders");
    const data = res.data;
    let ordersArray = [];
    
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];
        ordersArray.push({
          OrderID: item.OrderID,
          CustomerID: item.CustomerID,
          OrderDate: moment(item.OrderDate).format("MMMM D, YYYY"),
          ShipName: item.ShipName,
        });
      }
    }
    setOrders(ordersArray);
    return ordersArray;
  };

  useEffect(async () => {
    await fetchProducts();
    setIsLoading(false);
  }, []);

  const columns = [
    { title: "Order ID", field: "OrderID" },
    { title: "Customer ID", field: "CustomerID" },
    { title: "Order Date", field: "OrderDate" },
    { title: "Shipment Name", field: "ShipName" },
  ];

  return isLoading ? (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>Loading list of our Orders.....</h3>
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
            <h3>Find list of our Orders below</h3>
          </Fade>
          <hr />
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={columns}
              data={orders}
              title="Order Directory"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
