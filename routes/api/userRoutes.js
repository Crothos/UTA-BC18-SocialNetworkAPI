const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users -- Get all users and create new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId -- Get single user and delete user by ID
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// Add and delete friend by ID
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;