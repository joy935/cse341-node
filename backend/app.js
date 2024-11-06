const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const data = require("./user.json");

const port = 8080;

// middleware to parse the request body as JSON
app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    res.send("Hello World");
});

// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next(); 
})
app.get("/professional", async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
});

// start the server
app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));