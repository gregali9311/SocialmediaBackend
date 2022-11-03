const { Schema, model } = require ('mongoose');

const commentSchema = ({
    comment: String, 
    username: String,
});

const Comment = model("comments", commentSchema);

module.exports = Comment;