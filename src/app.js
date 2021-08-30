const express = require("express");
require("./database");
const routes = require("./routes")

const app = express();

//informamos ao express que vamos aceitar json
app.use(express.json)

app.use(routes);

module.exports = app;