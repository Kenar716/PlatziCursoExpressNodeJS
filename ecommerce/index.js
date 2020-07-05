const express = require('express');
const path = require('path');
const app = express();
//Se utiliza la instrucción path.join para que busque los archivos
//dentro de la carpeta en donde se esta ejecutando la aplicación
//esto con el objetivo de eliminar problemas de compatibilidad
//si el servidor en donde se ejecute sea de diferentes sistemas operativos
const productsRouter = require(path.join(__dirname, 'routes/products'));
const productsApiRouter = require(path.join(__dirname, 'routes/api/products'));

//Body Parse no es necesario en las ultimas versiones de express, en
//versiones anteriores se instala usando el comando npm i -S body-parse
//const bodyParse = require('body-parse');

//Indica que cuando busque archivos en donde el prefije use /static los busque en la carpeta de public
app.use("/static", express.static(path.join(__dirname, "public")));
//Si no se especifica express sabe que cuando usa un archivo fisico debe de buscarlo en la carpeta public
//lo anterior se define para que realizar una segmentacion de la forma en que se van a referenciar los
//archivos estaticos en el proyecto
//app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/products', productsRouter);
app.use('/api/products', productsApiRouter);

//El body Parse se usa/activa de la siguiente manera
//app.use(bodyParse.json()); //Versiones anteriores de express
app.use(express.json()); //En las últimas versiones ya es parte de express

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});