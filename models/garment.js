var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  garmentName: String,
  type: String,
  primaryColor: String,
  secondaryColor: String,
  fabric: Array,
  location: String,
  owner: String,
  blouseSize: Number,
  alterationComments: Array,
  eventInformation: String
});

var Garment = mongoose.model("Garments", UsersSchema);

module.exports = Garment;
