const db = require('../../database/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('ailments').select('ailment', 'a_desc');
}

function findBy(filter) {
  return db('ailments')
    
    .where(filter);
}

async function add(ailment) {
  
   const [user_id] = await db('ailments').insert(ailment, 'user_id');
   return findById(user_id);
   
}

function findById(user_id) {
  return db('ailment')
   
    .where({ user_id })
    .first();
}
