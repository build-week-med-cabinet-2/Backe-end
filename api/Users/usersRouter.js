const router = require('express').Router();

const Users = require('./usersModel');
const restricted = require('../auth/authenticate-middleware');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


router.get('/:id/ailments', (req, res) => {
  Users.findUserAilment(req.params.id)
  .then(ail => {
    res.status(200).json(ail)
  }).catch(err => {
    res.status(500).json(err)
  })
});




module.exports = router;
