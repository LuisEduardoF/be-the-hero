const Knex = require("knex");

exports.up = function(knex) {
  return knex.schema.createTable("Incidents", function(table){
    table.increments(); //Essa função usará o numero de dados como indice, Ex: Se ja for registrado 3 casos, se adicionar um novo ele será o 4
    table.string('title').notNullable();
    table.string('description').notNullable();
    
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ONGS'); //Dizendo que um dado nessa tabela está relacionado com outro dado em outra table
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Incidents');
};
