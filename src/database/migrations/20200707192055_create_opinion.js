exports.up = function(knex) {
  return knex.schema.createTable('opinion', function (table) {
      table.increments();  
      
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp');
      table.string('suggestion').notNullable();
      table.decimal('score').notNullable();
      table.string('cuponKey');

      table.string('companyName').notNullable();

      table.foreign('companyName').references('name').inTable('company');      
    });
};

exports.down = function(knex) {    //usado para algum erro no up
  return knex.schema.dropTable('opinion');
};
