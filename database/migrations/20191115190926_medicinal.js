
exports.up = function(knex) {
  return knex.schema
  .createTable('strains', t => {
      t.increments('strain_id')
      t.string('strain_name', 128)
        .notNullable()
      t.string('strain_type', 128)
          .notNullable()
      t.string('strain_desc', 500)
      t.string('benefits', 500)
  })
  .createTable('dosages', t => {
      t.increments('dosage_id')
     // dose string
     // usage string
  })
  .createTable('strain_dosage', t => {
      t.increments('direction_id')
      t.integer('strain_id')
        .unsigned()
        .notNullable()
        .references('strain_id')
        .inTable('strains')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    t.integer('dosage_id')
        .unsigned()
        .notNullable()
        .references('dosage_id')
        .inTable('dosages')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('strain_dosage')
  .dropTableIfExists('dosages')
  .dropTableIfExists('strains')
};
