const express = require('express');
const path = require('path');
//Se utiliza la instrucción path.join para que busque los archivos
//dentro de la carpeta en donde se esta ejecutando la aplicación
//esto con el objetivo de eliminar problemas de compatibilidad
//si el servidor en donde se ejecute sea de diferentes sistemas operativos
const productsRouter = require(path.join(__dirname, 'routes/views/products'));
const productsApiRouter = require(path.join(__dirname, 'routes/api/products'));
//Body Parser no es necesario en las ultimas versiones de express, en
//versiones anteriores se instala usando el comando npm i -S body-parser
//const bodyParser = require('body-parser');

// app
const app = express();

// middlewares
//El body Parser se usa/activa de la siguiente manera
//app.use(bodyParser.json()); //Versiones anteriores de express
app.use(express.json()); //En las últimas versiones ya es parte de express

// Static files
//Indica que cuando busque archivos en donde el prefije use /static los busque en la carpeta de public
app.use("/static", express.static(path.join(__dirname, "public")));
//Si no se especifica express sabe que cuando usa un archivo fisico debe de buscarlo en la carpeta public
//lo anterior se define para que realizar una segmentacion de la forma en que se van a referenciar los
//archivos estaticos en el proyecto
//app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routes
app.use('/products', productsRouter);
app.use('/api/products', productsApiRouter);

// Redirect
app.get('/', function(req, res) {
    res.redirect('/products');
});

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});