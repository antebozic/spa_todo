var express = require('express');
var router = express.Router();
var helper = require('../helpers/todos');

router.route('/')
.get(helper.getTodos)
.post(helper.createTodo);

module.exports = router;