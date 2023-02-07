const mongoose = require("mongoose");
const userSchema = require("../schema/user.js");

const modelUser = mongoose.model('User', userSchema);

module.exports = modelUser;