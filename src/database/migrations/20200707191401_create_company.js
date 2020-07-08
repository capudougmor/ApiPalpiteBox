
exports.up = function(knex) {
  return knex.schema.createTable('company', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');  
};

