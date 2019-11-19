const express = require('express')
const helper = require('./strn-hlpr.js')
const strn = express.Router()

strn.get('/', (req, res) => {
    helper.find()
    .then(strain => {
        res.status(200).json(strain)
    })
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

strn.get('/:id', (req, res) => {
    helper.findById(req.params.id)
    .then(strain => res.status(200).json(strain))
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

strn.post('/', (req, res, next) => {
const nS = req.body
if(!nS.strain_name || !nS.nS.strain_type) {
    res.status(400).json({ message: 'please add name and type of new strain' })
} else {
    helper.add(strain)
        .then(strain => {
            return helper.findById(strain.id)
        })
        .then(strain => {
            res.status(201).json(strain)
        })
        .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
}
})

strn.put('/:id', async (req, res) => {
        const edit = req.body
        const { id } = req.params
        if (!edit.strain_name || !edit.strain_type) {
            return res.status(400).json({message: `no strain with id of ${id}found`})
        }
        try {
            const str = await helper.findById(id)
           
            if (!str) {
                res.status(404).json({message: `no strain with id of ${id}found`})
            } else {
                await helper.update(id, edit)
                const uS = await db.findById(id)
    
                res.status(200).json(uS)
            }
        } catch (err) {
            res.status(500)
            .json({ error: 'failed to get users from db'})
        
        }
})

strn.delete('/:id', async (req, res) => {
    const id = req.params.id
    helper.remove(id)
    .then(rem => {
        if (rem > 0) {
            res.status(200).json({message: `Strain with id of ${id} has been removed`, id: id})
        } else {
            res.status(404).json({errorMessage: `Strain with ${id} could not be found`})
        }
        
    })
    .catch(err => {
        res.status(500)
        .json({ error: 'failed to delete strain from db'})
        })
})





module.exports = strn;