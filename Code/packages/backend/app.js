require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");
var usersRouter = require("./routes/users");
var authRoutes = require("./routes/auth");
var scheduleRoutes = require("./routes/userschedule");
var freeRoutes = require("./routes/freeTrail");
var checkinRoutes = require("./routes/checkin");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/location", locationRoutes);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRoutes);
app.use("/api/freeTrail", freeRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/checkin", checkinRoutes);
app.use("/api/class", classRoutes);


const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

module.exports = app;
