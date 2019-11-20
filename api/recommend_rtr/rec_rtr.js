const express = require('express')
const helper = require('./rec_helper')
const restricted = require('../auth/authenticate-middleware')
const recom = express.Router()


recom.get('/', restricted, (req, res) => {
    helper.find()
    .then(recs => {
        res.status(200).json(recs)
    })
    .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
})

recom.get('/u/:id', restricted, (req, res) => {
    helper.findByAilment(id)
    .then(u_ails => {
        res.status(200).json(u_ails)
    })
    .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
})

recom.get('/:id', restricted, (req, res) => {
    helper.findByStrain(id)
    .then(rec_strain => {
        res.status(200).json(rec_strain)
    })
    .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
})
module.exports = recom