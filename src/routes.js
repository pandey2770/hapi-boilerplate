const product = require('./models/product');

module.exports = [{
  method: 'GET',
  path: '/product',
  config: {
    auth: 'simple',
    handler: product.fetchProduct,
  },
}];
