const express = require('express');
const { registerUser, getAllUsers, getUserDetails } = require('../controllers/userController');
const router = express.Router();

router.route("/user/register").post(registerUser);
router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getUserDetails);

module.exports = router;