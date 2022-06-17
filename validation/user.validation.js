const Joi = require('joi')

const validationSchema = (fields)=>{
    const validationUser = Joi.object({
        email:Joi.string().min(8).max(24).required(),
        password:Joi.string().min(6).max(24).required()
    })
    const {error,value} = validationUser.validate(fields)
    return {error,value}
}

module.exports = {validationSchema}