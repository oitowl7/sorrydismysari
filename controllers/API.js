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
  console.log("Username: " + req.body.data.username);
  db.User.find({username: req.body.data.username.toLowerCase()})
    .then(data => {
      let message;
      console.log(data);
      if (!data[0]) {
        console.log("if ran");
        message = "User does not exist";
      } else if(data[0].pin != req.body.data.pin) {
        message = "Incorrect Pin"
      } else{
        message = data[0]
      }
      res.json(message);
    })
})

router.post('/create/existing', (req, res) => {
  console.log(req.body.data);
  res.json("Stuff happened back here at the existing spot");
})

router.post('/create/new', (req, res) => {
  console.log(req.body.data);
  res.json("stuff happened back here at the new house spot");
})

module.exports = router;