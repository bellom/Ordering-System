import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";
import moment from "moment";
import MaterialTable from "material-table";

export function CustomerPage() {
  const [customers, setCustomers] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const fetchCustomers = async () => {
    const res = await axios.get("http://localhost:3001/api/customers");
    const data = res.data;
    setCustomers(data);
    return data
  };

  useEffect(async () => {
    await fetchCustomers();
    setIsLoading(false);
  }, [])

  const columns = [
    { title: "Customer ID", field: "CustomerID" },
    { title: "Company Name", field: "CompanyName" },
    { title: "Contact Name", field: "ContactName" },
    { title: "Phone",        field: "Phone" },
  ];

  return isLoading ? (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>Loading list of our Customers.....</h3>
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
            <h3>Find list of our Customers below</h3>
          </Fade>
          <hr />
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={columns}
              data={customers}
              title="Customer Directory"
            />
          </div>
        </div>
      </div>
    </header>
  );
}