var mongoose = require('mongoose');
mongoose.set('debug', true);
process.env.MLAB_URL = "mongodb://<your_user_login>:<your_user_password>@ds015760.mlab.com:15760/<your_db_name>"

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/spa-todo-api");
  }

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


