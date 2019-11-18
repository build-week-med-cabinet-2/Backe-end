
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('intakes').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('intakes').insert([
        {ailment: 'back pain', years_use: '4', pain_level: '6', user_id: 1},
        {ailment: 'cancer', years_use: '1', pain_level: '9', user_id: 2},
        {ailment: 'ptsd', years_use: '3', pain_level: '3', user_id: 3},
      ]);
    // });
};
