var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  primaryColor: {
    type: String,
    required: true
  },
  secondaryColor: String,
  type: {
    type: String,
    required: true
  }

});

var Garment = mongoose.model("Garments", UsersSchema);

module.exports = Users;
