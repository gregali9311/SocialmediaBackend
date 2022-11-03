
const { Comment } = require("../models");
// const { find } = require("../models/thoughts");

module.exports = {
    getComments(req, res) {
        Comment.find()
            .then((comments) => res.json(comments))
            .catch((err)=> res.json(err))
    },
    createComment(req, res) {
        Comment.create(req.body)
        .then((comment)=> res.json(comment))
        .catch((err)=> res.json(err)) 
    },
    deleteComment(req, res) {
        Comment.deleteOne({_id: req.params.commendtId})
        .then((comment)=>
        !comment 
            ? res.status(404).json({message: "no matching comment"})
            : res.json(comment)
        )
    }
}