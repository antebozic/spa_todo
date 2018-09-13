var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: "Content can not be blank!"
    },
    completed: {
        type: Boolean,
        default: false 
    }, 
    date: {
        type: Date, 
        default: Date.now
    }

});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = todo;