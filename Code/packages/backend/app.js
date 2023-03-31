require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");
var usersRouter = require("./routes/users");
var authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/location", locationRoutes);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRoutes);

const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

module.exports = app;
