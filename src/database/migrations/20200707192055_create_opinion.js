exports.up = function(knex) {
  return knex.schema.createTable('opinion', function (table) {
      table.string('id').primary();    
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('suggestion').notNullable();
      table.string('score').notNullable();

      table.string('company_id').notNullable();
      table.foreign('company_id').references('id').inTable('company'); 
    });
};

exports.down = function(knex) {    //usado para algum erro no up
  return knex.schema.dropTable('opinion');
};
