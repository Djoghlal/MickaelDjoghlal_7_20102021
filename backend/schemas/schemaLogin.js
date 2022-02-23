const Joi = require("joi");
const schemaLogin = Joi.object ({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
        .max(128)
        .required(),

    password: Joi.string()
        .max(70)
        .min(5)
        // .pattern(new RegExp( Ici la Regex ))
        .required()
})

module.exports = schemaLogin;