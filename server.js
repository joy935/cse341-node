const express = require("express");
const app = express();
const mongodb = require("./mongodb");

const port = 3000;

// basic route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// route to list databases
mongodb.main((err, mongodb) => {
    if (err) {
        console.error(err);
        // process.exit(1);
    }
    console.log("Connected to MongoDB");
    mongodb.listDatabases(mongodb.client);
    app.listen(3000);
});

// start the server
app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));
