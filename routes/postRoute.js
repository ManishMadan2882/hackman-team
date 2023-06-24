const express = require('express');
const { getAllPost, createPost, addComment, getSinglePost, deletePost, likeAPost } = require('../controllers/postController');
const router = express.Router();

router.route("/posts").get(getAllPost);
router.route('/post/create').post(createPost);
router.route('/post/addComment').post(addComment);
router.route('/post/:id').get(getSinglePost);
router.route("/post/delete/:id").delete(deletePost);
router.route('/post/like/:id').post(likeAPost);

module.exports = router;