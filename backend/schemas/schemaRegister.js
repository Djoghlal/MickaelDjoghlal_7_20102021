const Joi = require("joi");
const schemaRegister = Joi.object ({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
        .max(128)
        .required(),

    password: Joi.string()
        .max(64)
        .min(6)
        // .pattern(new RegExp( Ici la Regex ))
        .required()
})

module.exports = schemaRegister;