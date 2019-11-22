const db = require('../../database/db-config.js')

module.exports = {
    find, 
    findById,
    add,
    addAttr,
    delete
};

function find() {
    return db
    .select('*')
    .from('attributes as a')
    .join('strains as s', 'a.strain_id', '=', 's.strain_id')
}

function findById(s_id) {
    return db
        .select('*')
        .from('attributes as a')
        .join('strains as s', 'a.strain_id', '=', 's.strain_id')
        .where('a.strain_id', '=', s_id)
        .first()
}

function add(strain) {
return     db('strains')
     .insert(strain, 'id')  
}

function addAttr(attribute) {
  return  db('attributes')
    .insert(attribute, 'id')
}

function deleted(id) {
    return db('strains')
    .where({ id })
    .then(result => result)
}

