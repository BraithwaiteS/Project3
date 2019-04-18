// Routes
// =============================================================
// Requiring our Todo model
var db = require("../../models");
const router = require("express").Router();

// Get route for returning a specific user
router.get("/tasks/:ID", function(req, res) {
  db.Task.findAll({
    where: {
      UserId: req.params.ID
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// Get route for retrieving a single task
router.get("/task/:id", function(req, res) {
  // console.log(req.params.id);
  db.Task.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbTask) {
    // console.log(dbTask.dataValues);
    res.json(dbTask);
  });
});

// POST route for saving a new task
router.post("/task", function(req, res) {
  // console.log(JSON.stringify(req.body.taskName));
  db.Task.create({
    taskName: req.body.taskName,
    completed: "N",
    UserId: req.body.userId
  })
    .then(function(dbTask) {
      // console.log(res.json(dbTask));
      res.json(dbTask);
    })
    .catch(function(error) {
      console.log("error", error);
      res.send(error);
    });
});

// DELETE route for deleting task
router.delete("/task/:ID", function(req, res) {
  db.Task.destroy({
    where: {
      id: req.params.ID
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// PUT route for updating task
router.put("/task", function(req, res) {
  db.Task.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

module.exports = router;
