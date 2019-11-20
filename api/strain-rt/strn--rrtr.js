const express = require('express')
const helper = require('./strn-hlpr.js')
const restricted = require('../auth/authenticate-middleware')
const strn = express.Router()

strn.get('/',restricted, (req, res) => {
    helper.find()
    .then(strain => {
        res.status(200).json(strain)
    })
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

strn.get('/:id', restricted, (req, res) => {
    helper.findById(req.params.id)
    .then(strain => res.status(200).json(strain))
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

strn.post('/', (req, res) => {
    console.log(req.body)

const {strain_name, strain_type, strain_desc} = req.body
const strain = {strain_name, strain_type, strain_desc}
const {effects, flavor} = req.body


if(!strain_name || !strain_type) {
    res.status(400).json({ message: 'please add name and type of new strain' })
} else if( !effects || !flavor) {
    res.status(400).json({ message: 'please add effects and flavors new strain' })
} else {
    let strain_id;
    helper.add(strain)
        .then(strain_idArr => {
            strain_id = strain_idArr[0]
            const attribute = {effects, flavor, strain_id}
            return helper.addAttr(attribute)
        })
        .then(() => helper.findById(strain_id))
        .then(strain => {
           
            res.status(201).json(strain)
        })
        .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
}
})

module.exports = strn