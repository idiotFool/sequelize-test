const {User, Blog} = require('./model');

!(async () => {
    // 删除一条博客
    // const delBlogRes = await Blog.destroy({
    //     where: {
    //         id: 4
    //     }
    // });
    // console.log('delBlogRes', delBlogRes > 0);

    // 删除一个用户啊
    const delUserRes = await User.destroy({
        where: {
            id: 1
        }
    });
    console.log('delUserRes', delUserRes)
})();