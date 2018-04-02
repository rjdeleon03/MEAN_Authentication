var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: "false"}));

var angularPath = path.join(__dirname, "dist");
app.use(express.static(angularPath));
app.use("/", express.static(angularPath));

module.exports = app;
