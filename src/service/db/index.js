// @flow

const Pg = require('pg');

const connectionString = process.env.NODE_ENV === 'test'
    ? 'postgres://localhost:5432/hapi-test'
    : 'postgres://localhost:5432/hapi';
const client = new Pg.Client(connectionString);
client.connect();

module.exports = {
    executeQuery: async (query: string): Promise<any> => {

        const data = client.query(query);
        client.end();
        return data;
    }
};
