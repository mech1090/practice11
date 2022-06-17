const bcrypt = require('bcrypt')
const config = require('config')
const {validationSchema} = require('../validation/user.validation')
const User = require('../model/user.model')
const serviceUser = require('../service/user.service')


const getLoginFrom = (req,res)=>{
    return res.render('login/layout')
}

const login = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const findUser = await serviceUser.findEmail({email})
 //   const findUser = await User.findOne({email})
    if(!findUser){
        return res.render('signup/layout',{message:'User does not exist Signup'})
    }
   const matchPassword = await bcrypt.compare(password,findUser.password)
    if(!matchPassword){
        return res.render('login/layout',{message:'Credentials Mismatched'})
    }
    return res.render('user/layout')
}


const getSignupFrom = (req,res)=>{
    return res.render('signup/layout')
}
const signup = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const {error, value} = validationSchema(fields)
    if(error){
        return res.render('signup/layout',{message:error.details[0].message})
    }
    const hashPassword = await bcrypt.hash(password,config.get('hash.salt'))
    const findUser = await serviceUser.findEmail({email})
    if(findUser){
        return res.render('login/layout',{message:'User already exist'})
    }
    const createUser = await serviceUser.CreateFields({email,password:hashPassword})
    return res.render('signup/layout',{message:`${createUser.email} is created`})

}

module.exports = {getLoginFrom,login,getSignupFrom,signup}