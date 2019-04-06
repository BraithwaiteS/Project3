// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the tasks
  app.get("/api/task/", function(req, res) {
    db.Task.findAll({})
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

  // Get route for returning posts of a specific task
  app.get("/api/task/taskName/:taskName", function(req, res) {
    db.Task.findAll({
      where: {
       taskName: req.params.taskName
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/task/:id", function(req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

  // POST route for saving a new task
  app.post("/api/task", function(req, res) {
    console.log(req.body);
    db.Task.create({
      taskName: req.body.Task,
      due_date: req.body.DueDate,
      completed: req.body.Completion
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/task/:id", function(req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });

  // PUT route for updating task
  app.put("/api/task", function(req, res) {
    db.Task.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });
};
