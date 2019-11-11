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
    // const blogListAndCount = await Blog.findAndCountAll({
    //     limit: 2,   // 限制每页显示2条
    //     offset: 0,  // 跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // });
    // console.log(
    //     'blogListAndCount: ',
    //     blogListAndCount.count,
    //     blogListAndCount.rows.map(blog => blog.dataValues)
    // )

    // 连表查询1
    // const blogListWithUser = await Blog.findAndCountAll({
    //     order: [
    //         ['id', 'desc']
    //     ],
    //     include: [{
    //         model: User,
    //         attributes: ['userName', 'nickName'],
    //         where: {
    //             userName: 'zhangsan'
    //         }
    //     }],
    // });
    //
    // console.log(
    //     'blogListWithUser',
    //     blogListWithUser.count,
    //     blogListWithUser.rows.map(blog => {
    //         const dataVal = blog.dataValues;
    //         dataVal.user = dataVal.user.dataValues;
    //         return dataVal;
    //     })
    // )

    // 连表查询2
    const userWithBlogList = await User.findAndCountAll({
        attributes: ['userName', 'nickName'],
        include: [{
            model: Blog,
        }]
    });

    console.log(
        'userWithBlogList',
        userWithBlogList.count,
        userWithBlogList.rows.map(user => {
            const userVal = user.dataValues;
            userVal.blogs = userVal.blogs.map(blog => blog.dataValues);
            return userVal;
        })
    )


})();