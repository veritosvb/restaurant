// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
//=========================================
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

//Data
//=========================================

var reservations = [];
var waitList = [];

// Routes
// =======================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
