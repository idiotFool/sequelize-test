/**
 * @description 更新操作
 * @author dc
 */
const { User } = require('./model');

!(async () => {
    const updateRes = await User.update({
        nickName: "张嘴山"
    }, {
        where: {
            userName: 'zhangsan'
        }
    });
    console.log('updateRes', updateRes[0])
})();