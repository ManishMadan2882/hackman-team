const express = require('express');
const { registerUser, getAllUsers, getUserDetails, updateUser, deleteUser, updateContact } = require('../controllers/userController');
const router = express.Router();

router.route("/user/register").post(registerUser);
router.route("/users").get(getAllUsers);
router.route("/user/find/:email").get(getUserDetails);
router.route("/user/update").put(updateUser);
router.route("/user/delete").delete(deleteUser);
router.route("/user/chat").post(updateContact);

module.exports = router;