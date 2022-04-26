const express = require("express");
require("dotenv").config();
const sql = require("mssql");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();
const port = 3001;
const table = "users";

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

const sqlConfig = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

app.get("/api/users", async (req, res) => {
  let pool = await sql.connect(sqlConfig);
  pool.request().query(`select * from ${table}`, (err, data) => {
    if(data) {
      res.send(data.recordset);
      console.log("List of users?", data.recordset);
    } else {
      console.log(err);
    }
  });
});

app.post("/api/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const pool = await sql.connect(sqlConfig);
  pool
    .request()
    .query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Wrong username or password" });
        }
      }
    );
});