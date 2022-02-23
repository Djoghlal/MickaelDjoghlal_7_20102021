const Joi = require("joi");
const schemaTopic = Joi.object ({
    topic: Joi.string()
        .min(32)
        .required(),
})

module.exports = schemaTopic;