const express = require('express');
let router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");


router.use('/api/', require('./API.js'));



module.exports = router;