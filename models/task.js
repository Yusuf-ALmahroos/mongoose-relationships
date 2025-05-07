const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isComplete: Boolean,
  user: 
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task
