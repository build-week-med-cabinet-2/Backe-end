const router = require('express').Router();

const ailments = require('./ailmentModel');
const restricted = require('.././auth/authenticate-middleware');

router.get('/', restricted, (req, res) => {
  ailments.find()
    .then(ailment => {
      res.json(ailment);
    })
    .catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
  const body = req.body
  ailments.add(body)
  .then(newA => res.status(201).json(newA))
  .catch(err => res.send(err));
})

module.exports = router;
