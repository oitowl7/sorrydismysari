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
  db.User.find({username: req.body.data.username.toLowerCase()})
    .then(data => {
      let message;
      if (!data[0]) {
        message = "User does not exist";
      } else if(data[0].pin != req.body.data.pin) {
        message = "Incorrect Pin"
      } else{
        message = data[0]
      }
      res.json(message);
    }).catch(err => console.log(err));
})

router.post('/create/existing', (req, res) => {
  //api call to find if the house exists and verify the pin. if either happens, a message is created. if not, string is left blank
  db.Household.find({name: req.body.data.household.toLowerCase()})
    .then(data => {
      let message = {
        userMessage: "",
        houseMessage: ""
      }
      if (!data[0]){
        message.houseMessage = "This house doesn't exist";
      }
      else if (req.body.data.housePin != data[0].pin){
        message.houseMessage = "The pin for this house is incorrect";
      } else {
        message.houseMessage = "";
      }
      //api call to check if the user exists. this always will happen. if it does exist, then a message is created. if not, string is left blank
      db.User.find({username: req.body.data.username.toLowerCase()})
        .then(data1 => {
          console.log("data1: ")
          console.log(data1);
          if(data1[0]){
            message.userMessage = "This username already exists";
            console.log("This is the final message for existing break: ");
            //the message with the username or household errors is sent and the create user is not made
            res.json(message);
          } else {
            //this will only run if there were no previous errors
            if(!message.houseMessage) {
              const userToCreate = {
                username: req.body.data.username,
                pin: req.body.data.pin,
                household: req.body.data.household
              }
              db.User.create(userToCreate)
                .then(data => {
                  message = data;
                  console.log("This is the final message for existing: ");
                  res.json(message);
                }).catch(err => console.log(err));
            } else {
              //if there was a household error, it skips the create user phase
              console.log("did not create user");
              res.json(message);
            }
          } 
        })
    }).catch(err => console.log(err))
})

router.post('/create/new', (req, res) => {
  //api call to find if the house exists. If that happens, a message is created. if not, string is left blank
  db.Household.find({name: req.body.data.household.toLowerCase()})
    .then(data => {
      let message = {
        userMessage: "",
        houseMessage: ""
      }
      if (data[0]){
        message.houseMessage = "This house already exist";
      } else {
        message.houseMessage = "";
      }
      //api call to check if the user exists. this always will happen. if it does exist, then a message is created. if not, string is left blank
      db.User.find({username: req.body.data.username.toLowerCase()})
        .then(data1 => {
          console.log("data1: ")
          console.log(data1);
          if(data1[0]){
            message.userMessage = "This username already exists";
            console.log("This is the final message for new break: ");
            //the message with the username or household errors is sent and the create user is not made
            res.json(message);
          } else {
            //this will only run if there were no previous errors
            if(!message.houseMessage) {
              const userToCreate = {
                username: req.body.data.username,
                pin: req.body.data.pin,
                household: req.body.data.household
              }
              db.User.create(userToCreate)
                .then(data => {
                  message = data;
                  console.log("This is the final message for new: ");
                  res.json(message);
                }).catch(err => console.log(err));
            } else {
              //if there was a household error, it skips the create user phase
              console.log("did not create user");
              res.json(message);
            }
          } 
        })
    }).catch(err => console.log(err))
})

module.exports = router;