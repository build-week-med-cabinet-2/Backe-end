const db = require('../../database/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db('ailments').select('ailment', 'a_desc', 'user_id');
}

function findBy(filter) {
  return db('ailments')
    
    .where(filter);
}

async function add(ailments) {
  
   const [ailment_id] = await db('ailments').insert(ailments);
   return findById(ailment_id);
   
}

function findById(ailment_id) {
  return db('ailments')
   
    .where({ ailment_id })
    .first();
}


function remove(ailment_id) {
  return db('ailments')
    .where({ailment_id })
    .del();
};

