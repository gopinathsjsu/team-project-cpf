require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/location", locationRoutes);


const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

module.exports = app;