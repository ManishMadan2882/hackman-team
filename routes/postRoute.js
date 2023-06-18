const express = require('express');
const { getAllPost } = require('../controllers/postController');
const router = express.Router();

router.route("/posts").get(getAllPost);

module.exports = router;