const productoData = require('../data/productoData');

const listarProductos = (req, res) => {
  const productos = productoData.obtenerProductos();
  res.json(productos);
};

const agregarProducto = (req, res) => {
  const nuevoProducto = req.body;
  productoData.agregarProducto(nuevoProducto);
  res.status(201).json({ mensaje: 'Producto agregado exitosamente' });
};

module.exports = {
  listarProductos,
  agregarProducto
};
