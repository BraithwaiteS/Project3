require("dotenv").config();

const accountSid = process.env.TWILIO_ACCT_SID;
const authToken = process.env.TWILIO_AUTH_TKN;
const fromPhone = process.env.TWILIO_SEND_NUM;

const client = require("twilio")(accountSid, authToken);

const router = require("express").Router();

// POST route for saving a new task
router.post("/text", function(req, res) {
  let myPhone = "+1" + req.body.phone;
  client.messages.create({
    to: myPhone,
    from: fromPhone,
    body: req.body.message
  });
});

module.exports = router;
