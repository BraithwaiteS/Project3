// Routes
// =============================================================
// Requiring our Todo model
var db = require("../../models");
const router = require("express").Router();

// Get route for returning a specific user
router.get("/tasks", function(req, res) {
  db.Task.findAll({
    where: {
     UserId: req.query.userId
    }
  })
    .then(function(dbTask) {
      res.json(dbTask);
    });
});

// POST route for saving a new task
router.post("/task", function(req, res) {
  console.log(req.body);
  db.Task.create({
    taskName: req.body.taskName,
    due_date: req.body.due_date,
    UserId: req.body.userId
  })
    .then(function(dbTask) {
      res.json(dbTask);
    }).catch(function(error) {
      res.send(error)
    })
});

  // DELETE route for deleting task
  router.delete("/task", function(req, res) {
    db.Task.destroy({
      where: {
        id: req.query.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

module.exports = router;

