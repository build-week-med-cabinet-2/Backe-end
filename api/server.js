const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//import routes
const strains = require('./strain-rt/strn--rrtr')
const userRouter = require('./Users/usersRouter');
const authRouter = require('./auth/auth-router');
const ailmentRouter = require('./ailment/ailmentRouter');
const recommends = require('./recommend_rtr/rec_rtr')
const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));


server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});
server.use('/api/ailments', ailmentRouter);
server.use("/api/strains", strains);
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/recommends', recommends)

module.exports = server;