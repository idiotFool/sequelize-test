const Sequelize = require('sequelize');
const conf = {
  host: 'localhost',
  dialect: 'mysql'
};

// 线上环境使用连接池
// conf.pool = {
//   max: 5, // 连接池中最大的链接数量
//   min: 0, // 连接池中最小的链接数量
//   idle: 10000 // 如果10s 内连接池中的某个链接没有被使用，则释放
// };

const seq = new Sequelize('db_blog', 'root', 'root', conf);

module.exports = seq;
