const db = require('../database/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('username', 'password');
}

function findBy(filter) {
  return db('users')
    
    .where(filter);
}

async function add(user) {
  
   const [user_id] = await db('users').insert(user, 'user_id');
   return findById(user_id);
   
}

function findById(user_id) {
  return db('users')
   
    .where({ user_id })
    .first();
}
