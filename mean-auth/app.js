var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var config = require("./config/database");

var app = express();
var apiRouter = require("./routes/api");

// Setup database
mongoose.Promise = require("bluebird");
mongoose.connect(config.database, {
    promiseLibrary: require("bluebird")
})
.then(() => console.log("connection successful"))
.catch((err) => console.error(err));

// Initialize passport
app.use(passport.initialize());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: "false"}));

app.use("/api", apiRouter);

var angularPath = path.join(__dirname, "dist");
app.use(express.static(angularPath));
app.use("/", express.static(angularPath));

// Always serve angular page for other (erroneous) paths
app.use("*", express.static(angularPath));

module.exports = app;
