const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();
const db = require("../models");
const axios = require("axios");

router.post('/garment/create', (req, res) => {
  console.log(req.body)
  db.Garment.create(req.body.data).then(data => res.json(data)).catch(err => console.log(err));
  // res.send("we did shit here");
})

router.post('/login', (req, res) => {
  console.log(req.body.data.username);
  db.User.find({username: req.body.data.username})
    .then(data => {
      let message;
      console.log("The next line is the user found");
      console.log(data)
      if (data === []) {
        message = "User does not exist";
      } else{
        message = data
      }
      res.json(message);
    })
})

module.exports = router;