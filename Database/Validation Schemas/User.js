const Joi = require('@hapi/joi')

const userSchema = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    discord: Joi.string().required(),
    password: Joi.string().min(8).required(),
    institutionName: Joi.string().required()
})

module.exports = userSchema