var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
 console.log("Hello")

var sequelize = new Sequelize('test', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

 console.log("Hello")

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});
 console.log("Hello")

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
