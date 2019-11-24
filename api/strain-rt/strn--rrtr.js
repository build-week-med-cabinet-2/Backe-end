const express = require('express')
const helper = require('./strn-hlpr.js')
const restricted = require('../auth/authenticate-middleware')
const strn = express.Router()

strn.get('/', (req, res) => {
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

const {strain_name, strain_type, strain_desc} = req.body;
const strain = {strain_name, strain_type, strain_desc};
const {effects, flavor} = req.body;


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
<<<<<<< HEAD
        .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}
        ))
}
})
// strn.put('/:id', async (req, res) => {
//         const edit = req.body
//         const { id } = req.params
//         if (!edit.strain_name || !edit.strain_type) {
//             return res.status(400).json({message: `no strain with id of ${id}found`})
//         }
//         try {
//             const str = await helper.findById(id)
           
//             if (!str) {
//                 res.status(404).json({message: `no strain with id of ${id}found`})
//             } else {
//                 await helper.update(id, edit)
//                 const uS = await db.findById(id)
    
//                 res.status(200).json(uS)
//             }
//         } catch (err) {
//             res.status(500)
//             .json({ error: 'failed to get users from db'})
        
//         }
// })
=======
        .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
};
>>>>>>> 166578e6031cf70e4120ac1f7467ff3667a71c4e

strn.delete('/:id', async (req, res) => {
    const id = req.params.id
    helper.remove(id)
    .then(rem => {
        if (rem > 0) {
            res.status(200).json({message: `Strain with id of ${id} has been removed`, id: id})
        } else {
            res.status(404).json({errorMessage: `Strain with ${id} could not be found`})
        };
        
    })
    .catch(err => {
        res.status(500)
        .json({ error: 'failed to delete strain from db'})
<<<<<<< HEAD
        })
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
=======
        });
    })
});




module.exports = strn;
>>>>>>> 166578e6031cf70e4120ac1f7467ff3667a71c4e
