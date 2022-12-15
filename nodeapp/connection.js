const mysql = require('mysql');

const con = mysql.createConnection({
    host: "covid191.cxdiure1h4ew.us-east-1.rds.amazonaws.com",
    user: "admin",
    database: "Covid19",
    port: "3306",
    password: "admin123",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;