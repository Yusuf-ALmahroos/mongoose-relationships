const Task = require('../models/task.js')
const User = require('../models/user.js')

const createTask = async (req, res) => {
  const newTask = await Task.create(req.body)
  await newTask.populate('user')
  const user = await User.findById(req.body.user) 
  user.tasks.push(newTask._id)
  user.save();
  res.send(newTask)
}

const findAllTasks = async (req, res) => {
  const tasks = await Task.find({})
  res.send(tasks)
}

const findTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user');
  res.send(task)
}

module.exports = {
  createTask,
  findAllTasks,
  findTaskById
}
