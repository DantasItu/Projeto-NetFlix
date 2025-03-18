// const express = require('express');
// const morgan = require ('morgan');
// const db = require('./api/connectMdb.js');

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./src/routes/filmes.routes.js";
import { db, URI } from "./api/connectMdb.js";
import mongoose from "mongoose";

mongoose.connect(`${URI}`);

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(5000, () => {
  console.log("meu servidor está funcionando");
});
