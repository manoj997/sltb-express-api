/* 
   ====================== PLEASE ADD YOUR CHANGE DESCRIPTIONS HERE ==============
    21-01-2021 - Manoj - created the file, added username, fullname, password
    31-05-2021 - Manoj -  added module exports
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype:{
    type: String,
    required: true,
    enum:['ADMIN','PASSENGER','DRIVER','CONDUCTOR','CHECKER','AUDITOR','PARTNER','EMPLOYEE']
  }
})
 
module.exports = mongoose.model("User", userSchema);
