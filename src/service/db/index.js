// @flow

const Pg = require('pg');

const connectionString = 'postgres://localhost:5432/hapi';
const client = new Pg.Client(connectionString);
client.connect();

module.exports = {
    executeQuery: async (query: string): Promise => {

        const data = client.query(query);
        client.end();
        return data;
    }
};
