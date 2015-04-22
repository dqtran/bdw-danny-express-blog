var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 
      'mongodb://heroku_app35436188:9ujrhbhpp6qnjdnrf35v35jekd@ds059661.mongolab.com:59661/heroku_app35436188'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-production'
  }
};

module.exports = config[env];
