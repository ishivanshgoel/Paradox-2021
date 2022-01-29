const Joi = require('@hapi/joi')

const userSchema = Joi.object({
    id: Joi.string().required(),
    answer: Joi.string().lowercase().required()
})

module.exports = userSchema