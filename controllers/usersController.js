const User = require('../models/user');

async function createUser(req, res)
{
  try 
  {
    if(req.body)
    {
      const newUser = await User.create(req.body)
      res.send(newUser);
    }
  } 
  catch(error) 
  {
    console.log(error.message);
  }
}

async function findAllUsers(req, res)
{
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error.message)
  }
}

async function findUserById(req, res)
{
  try {
    const user = await User.findById(req.param.id)
    res.send(user)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = 
{
  createUser,
  findAllUsers,
  findUserById
}