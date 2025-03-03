const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const https = require('https');
const fs = require('fs');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//user router
const router = express.Router();

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
app.use(express.static("client/build"));
//
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
//   useMongoClient: true
mongoose.Promise = Promise;
if (process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect("mongodb://localhost/disMyShari");
}

// Routes
app.use(require('../controllers'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  