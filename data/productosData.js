let productos = [];

const obtenerProductos = () => {
  return productos;
};

const agregarProducto = (producto) => {
  productos.push(producto);
};

module.exports = {
  obtenerProductos,
  agregarProducto
};
