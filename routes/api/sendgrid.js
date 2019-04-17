require("dotenv").config();
const router = require("express").Router();

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST route for saving a new task
router.post("/email", function(req, res) {
  const msg = {
    to: "ericfinney1@gmail.com",
    from: "HeyTrackATask@gmail.com",
    subject: "Reminder!! Task Due!!",
    text: "Log in to Track-A-Task for your to-do list.",
    html: "<strong>Log in to Track-A-Task for your to-do list.</strong>"
  };
  sgMail.send(msg);
});

module.exports = router;
