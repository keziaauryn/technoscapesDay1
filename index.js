var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

var Products = require("./product.json");

app.get("/product/listall", (req, res) => {
    res.json(Products);
});

app.get("/product/:id", (req, res) => {
    res.json(Products.find((product) => {
        return req.params.id == product.id
    }))  
});

const server = app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
   });

module.exports = server;