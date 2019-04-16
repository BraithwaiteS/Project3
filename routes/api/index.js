const router = require("express").Router();
const tasksRoutes = require("./tasks");
const usersRoutes = require("./users");
const messageRoutes = require("./tReminder");

// todo list routes
router.use("/api", tasksRoutes);
router.use("/api", usersRoutes);
router.use("/api", messageRoutes);

module.exports = router;
