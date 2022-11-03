const router = require('express').Router();
const { createThought } = require('../../controllers/thoughts');
// const {Comment, Thoughts, User} = require('../../models')

const {Thoughts } = require('../../models')


router.route("/").post(createThought);


module.exports = router