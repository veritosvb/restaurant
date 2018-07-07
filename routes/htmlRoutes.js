// Routes
// =======================================

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "homepage.html"));
    });

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
    
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });
}