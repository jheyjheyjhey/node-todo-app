var Todos = require('../model/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (request, response) {
        var starterTodos = [
            {
                userName: 'test',
                todo: 'Study NodeJs',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
                todo: 'Eat dinner',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
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