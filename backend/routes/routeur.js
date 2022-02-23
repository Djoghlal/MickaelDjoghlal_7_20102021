const express = require("express");
const routeur = express.Router();

//Fonction qui traite la demande du client sur la route principal "racine"
routeur.get("/", (requete, reponse) => {
    console.log('Page d\'accueil demandée');
    reponse.end("Pas d'accueil demandée !!");
});

routeur.use((requete, reponse, suite) => {
    const error = new error("Page non trouvée !");
    error.status = 404;
    suite(error); //Envoi à la route ci-dessous avec "error".
});

routeur.use((error, requete, reponse) => {
    reponse.status(error.status || 500);
    reponse.end(error.message);
});

module.exports = routeur;