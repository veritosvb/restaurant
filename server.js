// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//Set up Express App
//=========================================

var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });