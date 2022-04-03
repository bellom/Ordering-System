const express = require('express');
require('dotenv').config();
const sql = require('mssql')
const app = express();
const port = 5500;
const table = 'customers'

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

const sqlConfig = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

app.get('/api/customers', (req, res) => {
  sql.connect(sqlConfig)
  sql.query(`select * from ${table}`, (err, rows) => {
    res.send(rows);
  });
});
