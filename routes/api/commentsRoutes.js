const router = require('express').Router();
const { getComments, createComment, deleteComment } = require('../../controllers/comments')

const { Comment } = require('../../models')

router.route("/").get(getComments);

router.route("/").post(createComment);

router.route("/:commentId").delete(deleteComment);

module.exports = router