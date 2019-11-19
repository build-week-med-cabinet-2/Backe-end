
exports.up = function(knex) {
  return knex.schema
  .createTable('strains', t => {
      t.increments('strain_id')
      t.string('strain_name', 128)
        .notNullable()
        .unique()
      t.string('strain_type', 128)
          .notNullable()
      t.string('strain_desc', 6000)
  })
  .createTable('attributes', t => {
      t.increments('attribute_id')
      t.integer('strain_id')
        .unsigned()
        .notNullable()
        .references('strain_id')
        .inTable('strains')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      t.string('effects', 500)
        .notNullable()
      t.string('flavors', 500)
        .notNullable()
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('attributes')
  .dropTableIfExists('strains')
};
