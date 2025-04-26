# API REST con Arquitectura en Tres Capas
Este proyecto consiste en una aplicación desarrollada en Node.js que implementa una **API REST** con estructura basada en la arquitectura de **tres capas**. La funcionalidad principal es la gestión de productos: permite agregarlos y listarlos a través de endpoints HTTP.
El proyecto fue realizado como parte de un ejercicio práctico sobre arquitecturas de software.


¿Qué características hacen que esta sea una API REST?

Esta aplicación cumple con los principios REST debido a las siguientes características:

- Utiliza métodos HTTP bien definidos como `GET` y `POST`.
- Cada recurso (en este caso, los productos) tiene una URL identificable (`/productos`).
- Las respuestas y solicitudes están formateadas en **JSON**, lo que facilita la interoperabilidad.
- Es **stateless**, lo que significa que el servidor no guarda el estado del cliente entre peticiones.
- Está preparada para que pueda ser utilizada desde cualquier cliente (como aplicaciones móviles o front-end web), promoviendo una arquitectura desacoplada.


Diferencias con el diseño anterior (arquitectura de tres capas sin REST)

En la versión anterior del ejercicio, la arquitectura también estaba dividida en tres capas, pero no seguía el patrón REST ni estaba orientada a la web. A continuación, se comparan ambas versiones:

- En la arquitectura anterior, la interacción era directa desde consola o desde funciones del código. En esta versión, se realiza a través de **endpoints accesibles por HTTP**.
- En lugar de usar impresiones en consola o llamadas locales, se utiliza el navegador o herramientas como **Postman** para interactuar con la API.
- La arquitectura actual permite que se pueda **conectar un frontend** desarrollado en otra tecnología como React.
- La API es más **escalable y reutilizable**, ya que otros sistemas pueden consumirla fácilmente.


Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **app.js**: Punto de entrada de la aplicación. Configura Express y define las rutas.
- **/routes/productoRoutes.js**: Capa de presentación. Define los endpoints de la API.
- **/controllers/productoController.js**: Capa de lógica de negocio. Gestiona las operaciones con productos.
- **/data/productoModel.js**: Capa de acceso a datos. Almacena y gestiona los productos en memoria.

---

## Cómo ejecutar la aplicación

1. Asegurarse de tener Node.js instalado.
2. Clonar este repositorio o descargar los archivos.
3. Desde la terminal, ejecutar:

```bash
npm install
node app.js
