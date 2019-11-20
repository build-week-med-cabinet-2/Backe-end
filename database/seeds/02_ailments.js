
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ailments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ailments').insert([
        {ailment: 'pain', a_desc: 'back pain', user_id: '1'},
        {ailment: 'stress', a_desc: 'high pressure job cant turn off', user_id: '2'},
        {ailment: 'insomnia', a_desc: 'cant sleep brain turns', user_id: '3'},
        {ailment: 'anxiety', a_desc: 'social situations make me anxious', user_id: '4'},
        {ailment: 'depression', a_desc: 'bouts of depression haard to function', user_id: '5'},
        {ailment: 'nerves', a_desc: 'new situations make me nervous', user_id: '1'},
    
      ]);
    });
};
