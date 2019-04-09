const router = require("express").Router();
const tasksRoutes = require("./tasks");

// Book routes
router.use("/api", tasksRoutes);

module.exports = router;
