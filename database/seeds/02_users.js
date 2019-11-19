
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('users').truncate()
    // .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'admin', password: 'adminPass'}, //1
        {username:'user', password: 'user23'}, //2
        {username:'tom', password: 'dnharry'}, //3
        {username: 'kelly', password: 'dmiff'},
        {username: 'john', password: 'smith'},
        {username: 'cori', password: 'cori'}
      ]);
    // });
};
