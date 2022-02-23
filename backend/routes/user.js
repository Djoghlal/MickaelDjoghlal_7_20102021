const express = require('express'); //On récupère Express
const router = express.Router(); //On prépare la route user

const userCtrl = require('../controllers/user.js'); //On récupère la logique métier concernée.

router.post('/register', userCtrl.register); //Création de la route POST register
router.post('/login', userCtrl.login); //Création de la route POST register

module.exports = router;