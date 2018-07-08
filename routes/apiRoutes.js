var reservations = require("../data/tableData.js");;
var waitList = require("../data/waitinglistData.js");;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
// Displays all characters
  app.get("/reservations", function(req, res) {
      //reservations idcode
    console.log(reservations.length);
    if(reservations.length < 5){
        console.log("making reservation");
        return res.json(true);
    }
    else{
        return res.json(false);
    }
  
  });
  


  app.post("/reservations/:reservations", function(req, res) {
      var choise = req.params.reservations;
      console.log("Posting new table");
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    console.log(newTable);

    if(choise == "table"){
        reservations.push(newTable);
    }else{
        waitList.push(newTable);
    }
    res.json(newTable);
  });
}







