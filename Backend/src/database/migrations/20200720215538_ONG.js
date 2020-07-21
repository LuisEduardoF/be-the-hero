//UP: significa a criação de uma table no banco de dados ( nesse caso a table ONGS, com os campos id, name, email... )

//Criando a variavel tabela, e os tipos de cada dados, nesse caso todos são strings
exports.up = function(knex) {
  return knex.schema.createTable('ONGS', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('WhatsApp').notNullable();
      table.string('city').notNullable();
      table.string('UF', 2).notNullable();
  })
};
//DOWN: significa se der merda na criação. Volta um passo
exports.down = function(knex) {
  return knex.schema.dropTable('ONGS')
};
