
const { exec } = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if(author) {
        sql += `and author = '${author}' `
    }
    if(keyword) {
        sql +=`and keyword = '${keyword}' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
}

const getDetail = (id) => {
    // 先返回假数据 （格式是正确的）
    return [
        {
            id:1,
            title:'标题dd',
            content:'内容1',
            createTime: 1546610491112,
            author:'zhangsan'
        },
        {
            id:2,
            title:'标题d',
            content:'内容dd',
            createTime: 1546610491112,
            author:'lisi'
        }
    ]
}

const newBlog = (blogData = {}) => {
    return {
        id:3
    }
}

const updateBlog = (id,blogData = {}) => {
    return true
}

const delBlog = (id = {}) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
