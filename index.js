var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

app.listen(5000, () => {
 console.log("Server running on port 5000");
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