const express = require('express');
require('dotenv').config();
const sql = require('mssql')
const cors = require('cors')
const app = express();
const port = 3001;
const table = 'users'

app.use(express.json());
app.use(cors());

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

app.get('/api/users', (req, res) => {
  sql.connect(sqlConfig)
  sql.query(`select * from ${table}`, (err, rows) => {
    res.send(rows);
  });
});

app.post('/api/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  sql.connect(sqlConfig)
  sql.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if(err) {
      res.send({ err: err });
    }

    if (result) {
      res.send(result)
    } else {
      res.send({ message: "Wrong username or password" })
    }
  });
});