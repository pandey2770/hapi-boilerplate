const Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'product',
  connection: 'hapi',
  attributes: {
    name: 'string',
  },
});
