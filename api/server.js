const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//import routes
const strains = require('./strain-rt/strn--rrtr.js')
const userRouter = require('./Users/usersRouter.js');
const authRouter = require('./auth/auth-router');

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.use("/api/strains", strains);

server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);


module.exports = server;