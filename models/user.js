const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  avatar: {type: String},
  age: {typr: Number},
  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: "Task"}]
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = User;
