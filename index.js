const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));
app.get("/2", (req, res) => res.sendFile(path.join(__dirname + "/page2.html")));

app.listen(process.env.port || 3000);
console.log(`Server está rodando, filhão!!`);
