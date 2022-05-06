import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import axios from "axios";
import MaterialTable from "material-table";

export function EmployeePage() {
  const [employees, setEmployees] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:3001/api/employees");
    const data = res.data;
    setEmployees(data);
    return data
  };

  useEffect(async () => {
    await fetchEmployees();
    setIsLoading(false);
  }, [])

  const columns = [
    { title: "Employee ID", field: "EmployeeID" },
    { title: "Last Name ", field: "LastName" },
    { title: "First Name", field: "FirstName" },
    { title: "Title",        field: "Title" },
  ];

  return isLoading ? (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={1200}>
            <h3>Loading list of our Employees.....</h3>
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
            <h3>Find list of our Employees below</h3>
          </Fade>
          <hr />
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={columns}
              data={employees}
              title="Employee Directory"
            />
          </div>
        </div>
      </div>
    </header>
  );
}