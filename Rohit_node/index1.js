const mysql = require("mysql");
const express = require("express");
const app = express();
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
});

db.on("open", (err) => {
  if (err) {
    console.log("error goted");
  } else {
    console.log(" connection successfully");
  }
});
app.listen(port, () => {
  console.log("port number is running ....");
});
