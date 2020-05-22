// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const adminMiddleware = require('../middlaweres/admin');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin',adminMiddleware,mainController.devolverNombre);
router.get('/services', mainController.root);
router.get('/services/design', mainController.root);
module.exports = router;
