exports.up = function(knex) {
  return knex.schema.createTable('opinion', function (table) {
      table.string('id').primary();    
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('suggestion').notNullable();
      table.string('score').notNullable();

    });
};

exports.down = function(knex) {    //usado para algum erro no up
  return knex.schema.dropTable('opinion');
};
