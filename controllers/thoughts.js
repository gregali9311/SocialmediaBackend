const { Thoughts } = require('../models')

module.exports = { 
    createThought(req, res) {
        Thoughts.create(req.body)
        .then((dbPostData) => res.json(dbPostData))
        .catch((err)=> res.status(500).json(err))
    }
}