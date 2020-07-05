const express = require('express');
const app = express();
const expressJsx = require('./express-jsx');

app.engine("jsx", expressJsx);
    //1st Parameter: File extension
    //2nd Parameter: Templete engine callback

app.set("views", "./views"); //Specify the views directory

app.set("view engine", "jsx"); //Register the template engine

app.get('/', function(req, res) {
    res.render("index", { hello: 'hola', world: 'mundo' });
});

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});