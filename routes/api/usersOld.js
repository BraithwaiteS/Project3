// Routes
// =============================================================
var db = require("../../models");
const router = require("express").Router();

 // Get route for returning a specific user
 router.get("/users", function(req, res) {
  db.User.findAll({
    where: {
     UserId: req.query.id
    }
  })
    .then(function(dbUser) {
      res.json(dbUser);
    });
})
