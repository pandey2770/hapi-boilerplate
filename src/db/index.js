const pg = require('pg');

const connectionString = 'postgres://localhost:5432/hapi';
const client = new pg.Client(connectionString);
client.connect();

module.exports = {
  executeQuery: query => client.query(query),
};
