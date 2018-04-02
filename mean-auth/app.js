var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();
var apiRouter = require("./routes/api")

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: "false"}));

var angularPath = path.join(__dirname, "dist");
app.use(express.static(angularPath));
app.use("/", express.static(angularPath));

app.use("/api", apiRouter);

// Always serve angular page for other (erroneous) paths
app.use("*", express.static(angularPath));

module.exports = app;
