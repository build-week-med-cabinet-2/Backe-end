
exports.up = function(knex) {
    return knex.schema
    .createTable('ailments', t => {
        t.increments('ailment_id')
        t.string('ailment', 255)
          .notNullable()
        t.string('a_desc', 500)
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
  .dropTableIfExists('ailments')
};
