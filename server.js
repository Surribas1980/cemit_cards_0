const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));//parsea solo string
app.use(cors())

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});
