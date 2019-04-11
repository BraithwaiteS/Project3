const router = require("express").Router();
const tasksRoutes = require("./tasks");
const usersRoutes = require("./users");

// todo list routes
router.use("/api", tasksRoutes);
router.use("/api", usersRoutes);

module.exports = router;
