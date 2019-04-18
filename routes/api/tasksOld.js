// Requiring our Todo model
var db = require("../../models");
const router = require("express").Router();

router.get("/tasks", function(req, res) {
  db.Task.findAll({
    where: {
      UserId: req.query.userId
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// Get route for retrieving a single task
app.get("/task/:id", function(req, res) {
  db.Task.findOne({
    where: {
      id: req.query.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// POST route for saving a new task
router.post("/task", function(req, res) {
  console.log(req.body);
  db.Task.create({
    taskName: req.body.taskName,
    due_date: req.body.due_date,
    userId: req.body.userId
  })
    .then(function(dbTask) {
      res.json(dbTask);
    })
    .catch(function(error) {
      res.send(error);
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

// DELETE route for deleting task
router.delete("/task", function(req, res) {
  db.Task.destroy({
    where: {
      id: req.query.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

module.exports = router;

// Routes
// =============================================================
// module.exports = function(app) {

//   // Get route for returning a specific user
//   app.get("/api/tasks", function(req, res) {
//     db.Task.findAll({
//       where: {
//        UserId: req.query.userId
//       }
//     })
//       .then(function(dbTask) {
//         res.json(dbTask);
//       });
//   });

//   // Get route for retrieving a single task
//   app.get("/api/task/:id", function(req, res) {
//     db.Task.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbTask) {
//         res.json(dbTask);
//       });
//   });

//   // DELETE route for deleting task
//   app.delete("/api/task/:id", function(req, res) {
//     db.Task.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbTask) {
//         res.json(dbTask);
//       });
//   });

//   // PUT route for updating task
//   app.put("/api/task", function(req, res) {
//     db.Task.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbTask) {
//         res.json(dbTask);
//       });
//   });
// };
