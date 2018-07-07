var path = require("path");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/makereservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makereservation.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });
}