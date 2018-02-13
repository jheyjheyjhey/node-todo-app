var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${configValues.dbUsername}:${configValues.dbPw}@ds233208.mlab.com:33208/node-todo-app-db`
    }
};