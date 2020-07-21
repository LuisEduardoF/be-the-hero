const knex = require('knex');

const config = require('../../knexfile.js');

const conections = knex(config.development);

module.exports = conections;