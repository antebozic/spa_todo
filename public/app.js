$(document).ready(function() {
    $.getJSON("/api/todos")
    .then(addTodos)

})

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    if(todo.name == "ValidationError") {
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