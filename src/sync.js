const seq = require('./seq');

require('./model');

// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth err');
});

seq.sync({force: true}).then(() => {
    console.log('sync ok');
    process.exit();
});