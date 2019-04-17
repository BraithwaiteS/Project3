const router = require("express").Router();
const tasksRoutes = require("./tasks");
const usersRoutes = require("./users");
const messageRoutes = require("./tReminder");
const emailRoutes = require("./sendgrid");

// todo list routes
router.use("/api", tasksRoutes);
router.use("/api", usersRoutes);
router.use("/api", messageRoutes);
router.use("/api", emailRoutes);

module.exports = router;
