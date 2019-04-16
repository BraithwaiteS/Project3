require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const routes = require("./routes/api");
const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
// const Sequelize = require("sequelize");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// key for sendgrid
console.log("key", process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());

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
// console.log(process.env.TWILIO_ACCT_SID);

// EMAIL INFO
// Move to server.js???

// const express = require("express");

// Welcome Page for sendgrid server
app.get("/", (req, res) => {
  res.send("welcome to the send grid server");
});

app.get("/send-email", (req, res) => {
  // get info
  const { recipient } = req.query;
  //   , sender, topic, text.....might need to add these back into above const
  console.log("foo");
  // sendgrid data
  console.log(req);

  const msg = {
    to: recipient,
    from: "gettrackatask@gmail.com",
    subject: "Account Created!",
    text: "Welcome!"
  };

  // send email
  sgMail
    .send(msg)
    .then(msg => {
      console.log("mgs", msg);
      res.send("welcome to the send grid server");
    })
    .catch(err => console.log(err));
});
// Email listen
app.listen(3100, () => console.log("running on port 3100"));
