const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/dist"));

app.listen(PORT, () => {
 console.log(`Server is started on port: ${PORT}!`);
});