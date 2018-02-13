var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = process.env.port || 3000;
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);