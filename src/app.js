const express = require("express");
const config = require("./config");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const error = require("./red/errors");
//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//CONFIG
app.set("port", config.app.port);
//ROUTES
/* app.use("/api/lotaip", lotaip);
app.use("/api/indexlotaip", indexlotaip); */
app.use("/api", require("./routes"));

app.use(error);
module.exports = app;
