const loginCheck = (username,password) => {
    if(username === 'zhangsan' && password ==='1234'){
        return true
    }
    return false
}

module.exports = {
    loginCheck
}
