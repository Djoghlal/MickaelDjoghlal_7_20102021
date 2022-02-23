//On récupère tous les models existants dans ce dossier
const db = require("../models");
const joiSchemas = require("../schemas/joiSchemas");


// *****************  Logiques métier *****************

//On export la fonction viewTopics pour l'utiliser après.
exports.viewTopics = (req, res, next) => {

    db.topics.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ message: error.message }));

};




//On export la fonction viewTopic pour l'utiliser après.
exports.viewTopic = (req, res, next) => {
    console.log(req.user);
    db.topics.findOne({ where : { id: req.params.id }, 
        include: [{ 
            model: db.user,
            as: "users",
            attributes: ["name"],
        }]
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ message: error.message }));

}




//On export la fonction addTopic pour l'utiliser après.
exports.addTopic = async (req, res, next) => {
    try {
        const validSchema = await joiSchemas.schemaTopic.validateAsync(req.body);

        if (!validSchema) {
            return res.status(400).json({ message: "Erreur de données !!" })     
        }       

        const topicContent = {
            userId: req.user.userId, //On récupère l'id du token de l'user depuis auth.js (voir req.user console log plus haut)
            topic: req.body.topic,
        };

        db.topics.create(topicContent)

        .then(() => res.status(201).json({ message: 'Topic publié !' }))
        .catch(error => res.status(500).json({ message: error.message }));

    } catch (error) { res.status(500).json({ message: error.message }) };
}




//On export la fonction editTopic pour l'utiliser après.
exports.editTopic = async (req, res, next) => {
    try {
        const validSchema = await joiSchemas.schemaTopic.validateAsync(req.body);

        if (!validSchema) {
            return res.status(400).json({ message: "Erreur de données !!" })     
        }       

        //On récupère l'id du topic
        const topicId = req.params.id

        //On vérifie dans la base de donnée si l'id récupéré est bien présent
        const topicdb = await db.topics.findOne({ where : { id: topicId }})
        if (!topicdb) {
            //Message d'erreur
            return res.status(400).json({ message: "Id du topic introuvable !!" })
        }

        //Il est présent donc on peut le modifier dans la bdd
        topicdb.update(
            {
                topic: req.body.topic
            }
        )

        .then(() => res.status(201).json({ message: 'Topic modifié !' }))
        .catch(error => res.status(500).json({ message: error.message }));

    } catch (error) { res.status(500).json({ message: error.message }) };
}




//On export la fonction delTopic pour l'utiliser après.
exports.delTopic = async (req, res, next) => {
    try {
        
        //On récupère l'id du topic
        const topicId = req.params.id

        //On vérifie dans la base de donnée si l'id récupéré est bien présent
        const topicdb = await db.topics.findOne({ where : { id: topicId }})
        if (!topicdb) {
            //Message d'erreur
            return res.status(400).json({ message: "Id du topic introuvable !!" })
        }

        topicdb.destroy()

        .then(() => res.status(201).json({ message: 'Topic supprimé !' }))
        .catch(error => res.status(500).json({ message: error.message }));

    } catch (error) { res.status(500).json({ message: error.message }) };
}