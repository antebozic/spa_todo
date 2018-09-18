var mongoose = require('mongoose');
mongoose.set('debug', true);

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/spa-todo-api");
  }

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


