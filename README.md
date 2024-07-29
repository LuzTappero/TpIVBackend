DIPLOMATURA WEB FULL STACK- TP IV BACKEND - ICARO 2024
AUTORA: TAPPERO, MARIA LUZ

## DESCRIPCIÓN

API REST para gestion de productos, creada con Node.js, express y base de datos SQL. La API permite realizar operaciones de obtencion, creación, actualización y eliminación de datos.

## ESTRUCTURA DEL PROYECTO

El proyecto está modularizado en las siguientes partes:
DB- archivo.sql
SRC-archivo principal(app.js), configuración de la base de datos, modelos, controlladores, rutas y middlewares.

## INSTALACION

1. Clona el repositorio:

   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/LuzTappero/TpIVBackend.git)

2. Accede al resositorio en el directorio local
3. Instala las dependencias

   npm install

4. Descargar el archivo SQL(productsdb.sql) que se encuentra en la carpeta 'db' y crea una base de datos en tu gestor de base de datos con los scripts proporcionados.

5. Crear un archivo .env para configurar las variables de entorno

   DB_HOST=localhost
   DB_USER=tu-usuario
   DB_PASSWORD=tu-contraseña
   DB_NAME=nombre-de-tu-base-de-datos
   PORT=8080

## USO

1. Inicio de la aplicación

   npm run dev

2. La API estará disponible en `http://localhost:8080`.

## ENDPOINTS

1. CREAR UN PRODUCTO
   - **URL:** `/products/create`
   - **Método:** `POST`
   - **Descripción:** Crea un nuevo producto.
   - **Cuerpo de la solicitud:**
     json:
     {
     "productName": "Nombre del producto",
     "productCategory": "Descripción del producto",
     "productPrice": 10.99
     }
2. OBTENER TODOS LOS PRODUCTOS

   - **URL:** `/products`
   - **Método:** `GET`
   - **Descripción:** Obtiene una lista de todos los productos.

3. OBTENER PRODUCTOS POR ID

   - **URL:** `/products/:id`
   - **Método:** `GET`
   - **Descripción:** Obtiene un producto por su ID.

4. ACTUALIZAR UN PRODUCTO

   - **URL:** `/products/:id`
   - **Método:** `PATCH`
   - **Descripción:** Actualiza un producto existente por su ID.
   - **Cuerpo de la solicitud:**
     json
     {
     "productName": "Nombre editado del producto",
     "productCategory": "Descripción editada del producto",
     "productPrice": 10.99
     }

5. ELIMINAR UN PRODUCTO
   - **URL:** `/products/:id`
   - **Método:** `DELETE`
   - **Descripción:** Elimina un producto existente por su ID.
