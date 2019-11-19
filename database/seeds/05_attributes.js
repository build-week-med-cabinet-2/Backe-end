
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attributes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('attributes').insert([
        {strain_id: 1, benefit: 'pain relief', atribute: 'relaxed'},
        {strain_id: 2, benefit: 'stress relief', atribute: 'happy'},
        {strain_id: 3, benefit: 'anxiety relief', atribute: 'euphoric'},
        {strain_id: 4, benefit: 'depression relief', atribute: 'energetic'},
        {strain_id: 5, benefit: 'insomnia relief', atribute: 'sleepy'},
        {strain_id: 6, benefit: 'nervousness relief', atribute: 'uplifted'},
      ]);
    });
};
