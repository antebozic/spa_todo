$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(e) {
        if(e.which == 13) {
            createTodo();
        }
    })

})

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    if(todo.content == "ValidationError") {
        return;
    }
    var newTodo = $('<li class="task">' + todo.content + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed) {
        newTodo.addClass('.done');
    }
    $('.list').append(newTodo);
}

function createTodo() {
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {content: usrInput})
    .then(function(newTodo) {
        $('#todoInput').val("");
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    })
}