const pg = require('pg');

const connectionString = 'postgres://localhost:5432/hapi';
const client = new pg.Client(connectionString);
client.connect();

module.exports = {
  executeQuery: query => new Promise(
    (resolve, reject) => {
      client.query(query, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
        client.end();
      });
    }),
};
