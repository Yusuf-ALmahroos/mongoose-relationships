const express = require('express')
const router = express.Router()

const UserController = require('../controllers/usersController');

router.get('/', UserController.findAllUsers)
router.get('/:id', UserController.findUserById)
router.post('/', UserController.createUser)

module.exports = router;
