const router = require('express').Router();

const Users = require('./usersModel');
const restricted = require('../auth/auth-router');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
