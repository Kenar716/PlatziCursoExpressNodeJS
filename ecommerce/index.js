const express = require('express');
const path = require('path');
const app = express();
//Se utiliza la instrucción path.join para que busque los archivos
//dentro de la carpeta en donde se esta ejecutando la aplicación
//esto con el objetivo de eliminar problemas de compatibilidad
//si el servidor en donde se ejecute sea de diferentes sistemas operativos
const productsRouter = require(path.join(__dirname, 'routes/products'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/products', productsRouter);

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});