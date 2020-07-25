
exports.up = function(knex) {
  return knex.schema.createTable('company', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('msgCkecked');
    table.string('msgCupon');    
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');  
};

