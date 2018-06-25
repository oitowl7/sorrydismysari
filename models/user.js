var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  pin: {
    type: String,
    required: true
  },
  household: {
    type: String,
    required: true
  }

});

var User = mongoose.model("Users", UsersSchema);

module.exports = User;
