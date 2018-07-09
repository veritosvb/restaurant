var reservations = require("../data/tableData.js");;
var waitList = require("../data/waitinglistData.js");;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
// Displays all characters
  app.get("/reservations", function(req, res) {
      //reservations idcode
    if(reservations.length < 5){
        console.log("making reservation");
        return res.json(true);
    }
    else{
        return res.json(false);
    }
  
  });
  
  app.get("/confirm/:type", function(req, res) {
    var type = req.params.type;
  if(type == "table"){
      return res.json(reservations);
  }
  else{
      return res.json(waitList);
    }

});

  app.post("/reservations/:reservations", function(req, res) {
      var choise = req.params.reservations;
      console.log("Posting new table"  + choise);
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;

    if(choise == "table"){
        reservations.push(newTable);
    }else if(choise == "waitlist"){
        waitList.push(newTable);
    }
  });
}







