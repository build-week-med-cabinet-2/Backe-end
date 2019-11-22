const db = require('../../database/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserAilment,
  
};

function find() {
  return db('users').select('username', 'password', 'user_id');
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


function findUserAilment(userId) {
  return db
	.select('a.ailment_id', 'a.ailment', 'a.a_desc', 'u.user_id as userId', 'u.username as user')
	.from('ailments as a')
	.join('users as u', 'a.user_id', '=', 'u.user_id')
	.where('u.user_id', '=', userId);
  };
