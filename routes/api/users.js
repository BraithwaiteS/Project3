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
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

// POST route for saving a new user
router.post("/user", function(req, res) {
  console.log(req.body);
  console.log(db.User);
  db.User.create({
    userName: req.body.userName,
    email: req.body.userEmail,
    phone: req.body.userPhone
  })
    .then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    })
    .catch(function(error) {
      res.send(error);
    });
});
module.exports = router;
