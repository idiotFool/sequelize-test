const Sequelize = require('sequelize');
const conf = {
  host: 'localhost',
  dialect: 'mysql'
};

const seq = new Sequelize('db_blog', 'root', 'root', conf);

module.exports = seq;
