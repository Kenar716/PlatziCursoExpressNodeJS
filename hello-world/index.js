const express = require("express");
const app = express();

app.get("/", function(req, res, next) {
    res.send("Hello World");
})

app.get("/indexJson", function(req, res, next) {
    res.send({ data: "Hello World" });
})

const server = app.listen(8800, function() {
    console.log(`Listening http:localhost:${server.address().port}`);
})