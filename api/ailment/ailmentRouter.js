const router = require('express').Router();
const axios = require('axios');

const ailments = require('./ailmentModel');
const restricted = require('.././auth/authenticate-middleware');



router.get('/', restricted, (req, res) => {
  ailments.find()
  .then(ail => {
    res.status(200).json(ail)
  }).catch(err => {
    res.status(500).json(err)
  })
});


router.post('/', restricted, (req, res) => {
  const body = req.body
  ailments.add(body)
  .then(newA => res.status(201).json(newA))
  .catch(err => res.send(err));
})


router.post('/user/:id', (req, res) => {
 
  const ailmentInfo = { ...req.body, user_id: req.params.id };

    ailments.add(ailmentInfo)
        .then(ail => {
          res.status(201).json(ail)
        })
        .catch(err => {
          res.status(500).json({ error: 'internal service issue see'}) 
        }); 
    });

  

    router.delete('/:id', (req, res) => {
      ailments.remove(req.params.id)
        .then(count => {
          if (count > 0) {
            res.status(200).json({ message: 'The hub has been nuked' });
          } else {
            res.status(404).json({ message: 'The hub could not be found' });
          }
        })
        .catch(error => {
          // log error to server
          console.log(error);
          res.status(500).json({
            message: 'Error removing the hub',
          });
        });
    });

    
router.get('/:id', (req, res) => {
  ailments.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'ailment not found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the ailment with that id',
      });
    });
});
module.exports = router;
