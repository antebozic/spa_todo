$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(e) {
        if(e.which == 13) {
            createTodo();
        }
    })

    $('ul').on('click', 'span', function(e) {
        e.stopPropagation();
        removeTodo($(this).parent());
    })

    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    })

    console.log("more code @ https://github.com/antebozic/spa_todo")

})

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    if(todo.content == "ValidationError" || typeof(todo.content) === "undefined") {
        return;
    }
    var newTodo = $('<li class="task">' + todo.content + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed) {
        newTodo.addClass("done");
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

function removeTodo(todo) {
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: "DELETE", 
        url: deleteUrl
    })
    .then(function() {
        todo.remove();
    })
    .catch(function(err) {
        console.log(err);
    }) 
}

function updateTodo(todo) {
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT', 
        url: updateUrl, 
        data: updateData
    })
    .then(function(updatedTodo) {
        todo.toggleClass("done");
        todo.data('completed', isDone);
    })
}