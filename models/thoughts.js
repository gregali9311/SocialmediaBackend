const { Schema, model } = require ('mongoose');

const thoughtSchema = ({
    thought: String, 
    username: String,
});

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;