
const User = require('../model/user.model')

const findEmail = (fields)=>{
    return User.findOne(fields)
}

const CreateFields = (fields)=>{
    return User.create(fields)
}

module.exports = {findEmail,CreateFields}