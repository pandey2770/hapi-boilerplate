const postgresAdapter = require('sails-postgresql');
const Waterline = require('waterline');
const product = require('./product');

const orm = new Waterline();

const config = {
  adapters: {
    postgresql: postgresAdapter,
  },

  connections: {
    hapi: {
      adapter: 'postgresql',
      host: 'localhost',
      user: '',
      database: 'hapi',
    },
  },
};

orm.loadCollection(product);

let models;
const initialize = new Promise(
(resolve, reject) => {
  orm.initialize(config, (err, mod) => {
    if (err) {
      reject(err);
    }
    models = mod;
    resolve();
  });
});

module.exports = {
  initialize,
  getModel: modelName => models && models.collections[modelName],
};
