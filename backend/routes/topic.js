const express = require('express'); //On récupère Express
const router = express.Router(); //On prépare la route user
const auth = require("../middleware/auth");

const topicCtrl = require('../controllers/topic'); //On récupère la logique métier concernée.

router.get('/', auth, topicCtrl.viewTopics); //Création de la route GET view all topics
router.get('/:id', auth, topicCtrl.viewTopic); //Création de la route GET view one topic

router.post('/addTopic', auth, topicCtrl.addTopic); //Création de la route POST add topic
router.put('/editTopic/:id', auth, topicCtrl.editTopic); //Création de la route PUT edit topic
router.delete('/delTopic/:id', auth, topicCtrl.delTopic); //Création de la route DELETE del topic

module.exports = router;