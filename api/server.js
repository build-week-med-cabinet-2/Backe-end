const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//import routes
const strains = require('./strain-rtjs')

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.use("/api/strains", strain);

server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});

module.exports = server;