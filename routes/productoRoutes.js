const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.listarProductos);
router.post('/', productoController.agregarProducto);

module.exports = router;
