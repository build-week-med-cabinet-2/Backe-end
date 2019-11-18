
exports.up = function(knex) {
  return knex.schema
  .createTable('users', t => {
      t.increments('user_id')
      t.string('username', 255)
        .notNullable()
        .unique();
    t.string('password', 255)
    .notNullable();
  })
  .createTable('intakes', t => {
      t.increments('intake_id')
      t.string('ailment', 255)
      t.integer('years_use')
      t.integer('pain_level')

     t.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
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

