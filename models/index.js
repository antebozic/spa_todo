var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/spa-todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


