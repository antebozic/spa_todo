var mongoose = require('mongoose');
mongoose.set('debug', true);
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/spa-todo-api';

mongoose
    .connect(CONNECTION_URI, {
        useMongoClient: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


