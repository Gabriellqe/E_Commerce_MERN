E_Commerce_MERN
Este proyecto es una aplicación web de comercio electrónico que utiliza la arquitectura MERN (MongoDB, Express, React, Node.js) para crear una experiencia de usuario fluida y eficiente. La aplicación permite a los usuarios registrarse, iniciar sesión, navegar por productos, agregar productos al carrito de compras, realizar pagos utilizando la API de Stripe y ver el historial de pedidos. Además, se implementa la autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT).

¿Qué lenguajes y tecnologías se utilizan en este proyecto?
Este proyecto utiliza el lenguaje de programación JavaScript y las siguientes tecnologías:

MongoDB: para almacenar y gestionar datos de la aplicación.
Express.js: para crear el backend y manejar las rutas y peticiones HTTP.
React.js: para construir la interfaz de usuario del frontend.
Node.js: para ejecutar el servidor y el backend de la aplicación.

¿Cómo puedo ejecutar el proyecto localmente?
Para ejecutar el proyecto localmente, sigue los siguientes pasos:

Clona el repositorio en tu máquina local utilizando el comando git clone [URL del repositorio].
Abre la terminal en la carpeta raíz del proyecto y ejecuta el comando npm install para instalar todas las dependencias necesarias.
Asegúrate de tener MongoDB instalado y ejecutando en tu máquina local.
Crea un archivo .env en la carpeta raíz del proyecto y agrega la configuración de tu base de datos MongoDB y las claves de API de Stripe. Por ejemplo:

MONGODB_URI=mongodb://localhost:27017/e-commerce
PASS_SEC= ReactEcommerce
JWT_SEC= ReactEcommerce
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
STRIPE_PUBLIC_KEY=tu_clave_publica_de_stripe

Ejecuta el comando npm start para iniciar la aplicación en modo de desarrollo.
Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.


¿Qué tipo de productos se pueden encontrar en la aplicación?
En la aplicación, se pueden encontrar diferentes tipos de productos de acuerdo con las categorías, tamaños y colores especificados en el modelo de MongoDB. Los productos tienen un título, una descripción, una imagen, una categoría, un tamaño, un color, un precio y una disponibilidad en stock. Algunos ejemplos de categorías podrían ser ropa, electrónica, hogar y jardín, etc.

¿Cómo puedo agregar nuevos productos a la aplicación?
Para agregar nuevos productos a la aplicación, se puede utilizar la API createProduct. Debes enviar una solicitud POST al endpoint "/api/v1/products", incluyendo los detalles del producto en el cuerpo de la solicitud. Los detalles del producto deben seguir el modelo de MongoDB especificado anteriormente. Una vez que se envía la solicitud, la API crea un nuevo documento de producto en la base de datos y devuelve el producto creado en la respuesta. Asegúrate de tener los permisos necesarios para realizar esta operación y de que la información del producto que agregas sea precisa y completa.


