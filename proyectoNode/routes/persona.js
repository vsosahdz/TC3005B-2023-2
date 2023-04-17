const router = require('express').Router();
const personaController = require('../controllers/persona');

router.get('/altaPersona',personaController.getAltaPersona);
router.get('/listaPersona',personaController.getListaPersona);

module.exports = router;