
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {strain_name: 'ACDC', strain_type: 'sativa', strain_desc: 'High CBD:THC ratio. This strain induces little-to-no intoxicating effects and helps many patients treat various ailments like pain, anxiety, epilepsy, multiple sclerosis, and the negative effects of chemotherapy, all with a clear head.', benefits: 'realxed, happy, focused, pain, anxiety, depression, inflamation'},
        {strain_name: 'Amnesia', strain_type: 'sativa', strain_desc: 'passing on uplifting, creative, and euphoric effects ideal for treating mood disorders', benefits: 'energetic, euphoric, relaxed, stress, depression'},
        {strain_name: 'Berry White', strain_type: 'hybrid', strain_desc: 'Berry is famous in its own right for its even, balanced effects that offer relaxation from stress and anxiety along with a sense of euphoria. This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.', benefits: 'relaxed, creative, uplifted, anxiety, depression, insomnia'},
        {strain_name: 'Gelato', strain_type: 'hybrid', strain_desc: 'Physical relaxation comes on strong, but many find themselves still mentally agile enough to stay productive and creative when enjoying Gelato during the day.', benefits: 'euphoric, relaxed, pain, stress'},
        {strain_name: 'Afghan Kush', strain_type: 'Indica', strain_desc: 'Revered for its heavy resin content and powerfully sedating effects, Afghan Kush is a top choice for anyone looking to relax after a long day.', benefits: 'sleepy, relaxed, hungry, stress, anxiety, pain'},
        {strain_name: 'Chill Panda', strain_type: 'indica', strain_desc: '60s vibe of all peace and no war this is a pure representation of that moment frozen in time. Afghan is great for totally numbing your body so you dont feel any pain you might be having.', benefits: 'uplifted, focused, pain, stress'},

      ]);
    });
};
