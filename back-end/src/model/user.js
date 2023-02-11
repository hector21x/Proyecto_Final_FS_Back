const mongoose = require("mongoose");
const userSchema = require("../schema/user.js");

module.exports = mongoose.model('student', userSchema);

