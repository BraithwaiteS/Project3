// need to creat a new users// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

 // Get route for returning a specific user
 app.get("/api/users", function(req, res) {
  db.User.findAll({
    where: {
     UserId: req.query.id
    }
  })
    .then(function(dbUser) {
      console.log("get users");
      res.json(dbUser);
    });
})
}