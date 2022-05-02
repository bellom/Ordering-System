require("dotenv").config();
const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const session = require("express-session");
const { redirect } = require("express/lib/response");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "login",
    resave: true,
    saveUninitialized: true,
  })
);

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
  pool.request().query('select * from products', (err, data) => {
    if (data) {
      res.send(data.recordset);
    } else {
      console.log(err);
    }
  });
});

app.post("/api/login", async function (request, response) {
  const username = request.body.username;
  const password = request.body.password;
  await sql.connect(sqlConfig);
  if (username && password) {
    const data = await sql.query`select * from users where username = ${username} and password = ${password}`
    if (data.recordset.length > 0) {
      request.session.loggedin = true;
      request.session.username = username;
      response.send(data.recordset[0].Username);
    } else {
      response.send({ message: "Wrong username or password" });
    }
  } else {
    response.send({ message: "Please enter Username and Password!" });
    response.end();
  }
});

app.get("/api/products", async (req, res) => {
  let pool = await sql.connect(sqlConfig);
  pool.request().query('select * from products', (err, data) => {
    if (data) {
      res.send(data.recordset);
    } else {
      console.log(err);
    }
  });
});
