# sequelize-test
use ORM sequelize to operate mysql

### 都是异步操作

#### 1、npm install mysql2 sequelize --save
#### 2、new Sequelize('database', 'name', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})
#### 3、new Sequelize().authenticate()   sequelize链接mysql测试

#### 4、new Sequelize().define() 定义模型

#### 5、new Sequelize().sync({force: true}) 同步到数据库

#### 6、new Sequelize().findOne();   new Sequelize().findAll(); new Sequelize().findAndCountAll(); new Sequelize().create() 

#### 7、创建外键关联
1） User.hasMany(Blog, {
    foreignKey: 'userId'
}) 

2）Blog.belongsTo(User, {
    foreignKey: 'userId'
})

#### 8、安装redis
1）url: http://www.runoob.com/redis/redis-install.html

2）注意： 通过redis-server 启动redis报错【REDIS启动出错CREATING SERVER TCP LISTENING SOCKET 127.0.0.1:6379: BIND: NO ERROR】

    解决办法： 1、命令行运行 redis-cli.exe 2、shutdown 3、exit 4 重启 redis-server
#### 9、使用redis
    set name 'dc'; set site 'www.google.com'; get name; keys *
    
#### 10、         

，


