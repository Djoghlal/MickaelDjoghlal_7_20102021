//On récupère tous les models existants dans ce dossier
const db = require("../models");
const bcrypt = require('bcrypt'); //On récupère bcrypt
const jwt = require("jsonwebtoken");
const joiSchemas = require("../schemas/joiSchemas");


// *****************  Logiques métier *****************

//On export la fonction register (inscription) pour l'utiliser après.
exports.register = async (req, res, next) => {
    try {
        //Vérification de l'email et le password avec Joi
        const validSchema = await joiSchemas.schemaRegister.validateAsync(req.body);

        if (!validSchema) {
            return res.status(400).json({ message: "Erreur de donnée !!" });
        }

        const user = { 
            email: req.body.email
        }

        //Vérification dans la table si l'email est présent
        const userdb = await db.user.findOne({ where : { email: user.email } });
        
        //Si userdb est existant "true", alors on met un message d'erreur.
        if (userdb) {
            return res.status(400).json({ message: "Utilisateur déjà existant !!" });
        }

        //Le mot de passe va se mélanger 10 fois.
        bcrypt.hash(req.body.password, 10)

        //Le .then récupère la réponse de la fonction hash
        .then((hash) => {
            user.password = hash
            //On créer le nouvel utilisateur dans la table user
            return db.user.create(user);
        })

        //Réponse du serveur
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(500).json({ message: error.message }));

    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


//On export la fonction login pour l'utiliser après.
exports.login = async (req, res) => {
    try {
        //Vérification de l'email et le password avec Joi
        // if (!isValid) {
        //     return res.status(400).json({ message: "Erreur de données" })   
        // }

        const user = { 
            email: req.body.email,
            password: req.body.password
        }

        //Vérification dans la table si l'email est présent
        const userdb = await db.user.findOne({ where : { email: user.email } });

        //On vérifie si l'email n'est pas présent dans la base de donnée
        if (!userdb) {
            return res.status(400).json({ message: "L'email ou le mot de passe est incorrect !!" })   
        }

        //On compart le mot de passe haché de la BDD avec celui entré par l'utilisateur
        bcrypt.compare(user.password, userdb.password)

        //Réponse du serveur
        .then((bcryptResult) => {
            if (!bcryptResult) {
                return res.status(400).json({ message: "L'email ou le mot de passe est incorrect !!" })
            }

            res.status(201).json({ 
                userId: userdb.id, 
                userRang: userdb.rang,
                userToken: jwt.sign( {
                    userId: userdb.id
                }, 
                    process.env.TOKEN_KEY,
                    { expiresIn: "24h" }
                )
            })
        })

        //Avant la soutenance, mettre message: error
        .catch(error => res.status(500).json({ message: error.message }));

    } catch(err) {
        //Avant la soutenance, mettre message: error
        return res.status(500).json({ message: error.message })
    }
}