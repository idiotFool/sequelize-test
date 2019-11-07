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

