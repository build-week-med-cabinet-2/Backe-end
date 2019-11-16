
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
      t.increments('user_id')
      t.string('username', 26)
        .notNullabble()
    t.string('password', 21)
        .notNullabble()
  })
  .createTable('intakes', t => {
      t.increments('intake_id')
      t.string('ailment', 255)
        .notNullabble()
      t.integer('years_use')
        .notNullabble()
      t.integer('pain_level')
        .notNullabble()
      t.integer('user_id')
        .unsigned()
        .notNullabble()
        .refrences('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('intakes')
  .dropTableIfExists('users')
};

