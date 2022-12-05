const express = require("express");
const bodyParser = require("body-parser");


const app = express();

//import routes
const loginrouter = require("./routes/login");
const messagerouter = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginrouter);

app.use(messagerouter);

app.listen(4000);