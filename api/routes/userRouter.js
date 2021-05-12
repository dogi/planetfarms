const express = require('express')
const router = express.Router()
const { registerUser, authUser, updateUser, getUsers, getUserById, searchUserName } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

router.route('/')
  .post(registerUser)
  .get(protect, getUsers)
router.post('/login', authUser)
router.route('/search').get(searchUserName)
router
  .route('/:id')
  .get(protect, getUserById)
  .put(protect, updateUser)

module.exports = router
