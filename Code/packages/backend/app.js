
var usersRouter = require("./routes/users");
var authRoutes = require("./routes/auth");
var freeRoutes = require("./routes/freetrail");
var locationRoutes = require("./routes/location");
var checkinRoutes = require("./routes/checkin");
var classRoutes = require("./routes/class");
var scheduleRoutes = require("./routes/userschedule");
var equipmentRoutes = require("./routes/equipment")
var activityRoutes = require("./routes/activity")


require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");

connection();

// middlewares
app.use(express.json());
app.use(cors({credentials: true, origin: true}));

// routes
app.use("/api/users", usersRouter);
app.use("/api/auth", authRoutes);
app.use("/api/freeTrail", freeRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/checkin", checkinRoutes);
app.use("/api/class", classRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/activity", activityRoutes);


const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

module.exports = app;
