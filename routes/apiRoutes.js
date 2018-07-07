var path = require("path");
var reservations = require("../data/tableData.js");;
var waitList = require("../data/waitinglistData.js");;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
// Displays all characters
  app.get("/api/reservations", function(req, res) {
    return res.json(characters);
  });
  
  // Displays a single character, or returns false
  app.get("/reservations/:reservations", function(req, res) {
      //reservations idcode
    var chosen = req.params.reservations;
  
    console.log(chosen);

    //if more reservatioons available 

    if(reservations.length < 5){
        //reservations available
    }
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].uniqueId) {
        return res.json(reservations[i]);
      }
    }


    //if no more reservatioons available waiting list

  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.name = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    reservations.push(newTable);
  
    res.json(newTable);
  });
  
    

}



