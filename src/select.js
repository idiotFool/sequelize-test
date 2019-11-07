const {User, Blog} = require('./model');

!(async () => {
    // 查询一条记录
    // const zhangsan = await User.findOne({
    //     where: {
    //         userName: 'zhangsan'
    //     }
    // });
    // console.log('zhangsan: ', zhangsan.dataValues);

    // 查询特定的列
    // const zhangsanName = await User.findOne({
    //     where: {
    //         userName: 'zhangsan'
    //     },
    //     attributes: ['userName', 'nickName']
    // });
    // console.log('zhangsanName: ', zhangsanName.dataValues);

    // 查询一个列表
    // const zhangsanBloglist = await Blog.findAll({
    //     where: {
    //         userId: 1
    //     },
    //     order: [
    //         ['id', 'desc']
    //     ]
    // });
    // console.log('zhangsanBloglist: ', zhangsanBloglist.map(blog => blog.dataValues))

    // 分页查询
    // const blogPageList = await Blog.findAll({
    //     limit: 2,   // 限制每页显示2条
    //     offset: 0,  // 跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // });
    // console.log('blogPageList: ', blogPageList.map(blog => blog.dataValues))

    // 查询总数
    const blogListAndCount = await Blog.findAndCountAll({
        limit: 2,   // 限制每页显示2条
        offset: 0,  // 跳过多少条
        order: [
            ['id', 'desc']
        ]
    });
    console.log(
        'blogListAndCount: ',
        blogListAndCount.count,
        blogListAndCount.rows.map(blog => blog.dataValues)
    )
})();