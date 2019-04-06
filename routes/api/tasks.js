const router = require("express").Router();
const booksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router
  .route("/")
  .get(booksController.findAll) //change this to the tasksController findall sequelize equivilent
  .post(booksController.create); //change this to the tasksController create sequelize equivilent

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(booksController.findById) //change this to the tasksController findbyid sequelize equivilent
  .put(booksController.update) //change this to the tasksController update sequelize equivilent
  .delete(booksController.remove); //change this to the tasksController remove sequelize equivilent

module.exports = router;
