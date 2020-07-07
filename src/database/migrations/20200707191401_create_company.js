
exports.up = function(knex) {
  return knex.schema.createTable('company', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    
    table.string('opinion_id').notNullable();
    table.foreign('opinion_id').references('id').inTable('opinion');  

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');  
};

