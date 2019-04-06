const router = require("express").Router();
const tasksRoutes = require("./tasks");

// Book routes
router.use("/tasks", tasksRoutes);

module.exports = router;
