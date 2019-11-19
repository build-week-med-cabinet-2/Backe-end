
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {user_id: 1, ailment_id: 1, strain_id: 1},
        {user_id: 2, ailment_id: 2, strain_id: 2 },
        {user_id: 3, ailment_id: 3, strain_id: 5},
        {user_id: 4, ailment_id: 4, strain_id: 3},
        {user_id: 5, ailment_id: 5, strain_id: 4},
        {user_id: 1, ailment_id:6 , strain_id: 6},
      
      ]);
    });
};
