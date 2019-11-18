const db = require('../../database/db-config.js')

module.exports = {
    find, 
    findById,
    add,
    update,
    remove
}

function find() {
    return db('strains')
}

function findById(id) {
    return db('strains')
        .where({ id })
        .first()
}

function add() {
    return db('strains')
        .insert('strains')
}

function update(id, strain) {
    return db('strains')
        .update(strain)
        .where({ id })
        .then(newStrain => {
            return findById(id)
        })
}

function remove() {
    return db("strains")
        .where({ id })
        .del()
        .then(result => result);
}