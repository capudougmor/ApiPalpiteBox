exports.up = function(knex) {
  return knex.schema.createTable('opinion', function (table) {
      table.increments();    
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('suggestion').notNullable();
      table.decimal('score').notNullable();
      
    });
};

exports.down = function(knex) {    //usado para algum erro no up
  return knex.schema.dropTable('opinion');
};
