//Récupération du Framework Express pour utilisation.
const express = require("express");
//Récupération de Morgan pour gestion des erreurs.
const morgan = require("morgan");
//Récupération de Helmet pour sécuriser les en-tête HTTP.
const helmet = require("helmet");
//Récupérer un chemin (emplacement).
const path = require("path");

require("dotenv").config();

//Faire tourner le framework Express sur App.js
const app = express();

//Faire tourner Helmet
app.use(helmet());

//Mise en place des headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //Indication de la source du frontend autorisée.
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //On permet l'autorisation des GET, POST etc...
    next();
});

//On autorise le contenu des requêtes (body)
app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

//Autorisation de la base de donnée à se connecter, qui récupère dans le dossier models
const db = require("./models");

//Synchronisation des models
db.sequelize.sync();

//Supprime les tables de la BDD pour ajouter les nouvelles
// db.sequelize.sync({
//     force:true
// });

//Récupérer les images du back à envoyer dans le front.
app.use('/images', express.static(path.join(__dirname, 'images')));

//Routes concernant le user
const usersRoutes = require('./routes/user.js');
app.use("/api/user", usersRoutes);

//Routes concernant les topics
const topicsRoutes = require('./routes/topic.js');
app.use("/api/topic", topicsRoutes);

//Message de confirmation de requête reçue.
app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

//On exporte le module App pour l'utiliser dans le server.js
module.exports = app;