var Todos = require('../model/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (request, response) {
        var starterTodos = [
            {
                username: 'test',
                todo: 'Study NodeJs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'lodi1',
                todo: 'Eat dinner',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'create todo app',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function (err, data) {
            response.send(data)
        })
    });
};