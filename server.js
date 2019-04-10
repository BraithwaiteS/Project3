const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const routes = require("./routes/api");
// const Sequelize = require("sequelize");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bring in routes file
app.use(routes);

// Get route for returning a specific user
// app.get("/api/tasks", function(req, res) {
//   db.Task.findAll({
//     where: {
//      UserId: req.query.userId
//     }
//   })
//     .then(function(dbTask) {
//       res.json(dbTask);
//     });
// });

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

let syncOptions = { force: false };
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
