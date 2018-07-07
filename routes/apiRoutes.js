// Routes
// =======================================

module.exports = function(app){
    app.get("/data/tableData.js", function(req, res) {
        return res.json(tableData);
    });

    app.get("/data/waitingListData.js", function(req, res) {
        return res.json(tableData);
    });
}