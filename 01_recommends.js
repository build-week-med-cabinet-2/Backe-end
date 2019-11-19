exports.up = function(knex) {
    return knex.schema
      .createTable('recommends', t  => {
          t.increments('approved_id')
          t.integer('user_id')
              .unsigned()
              .notNullable()
              .references('user_id')
              .inTable('users')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          t.integer('ailment_id')
              .unsigned()
              .notNullable()
              .references('ailment_id')
              .inTable('ailments')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          t.integer('strain_id')
              .unsigned()
              .notNullable()
              .references('strain_id')
              .inTable('strains')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
  };
   
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExist('recommends')
  };