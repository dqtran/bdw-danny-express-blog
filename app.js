

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
console.log('attempt connect to mongodb');

var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});
console.log('successfully connected to mongodb');

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
console.log('models required');

var app = express();

require('./config/express')(app, config);
console.log('require express configuration');

app.listen(process.env.PORT || 3000);
console.log('up and running on port ' + config.port);

