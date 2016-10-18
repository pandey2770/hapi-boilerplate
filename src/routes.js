const product = require('./handler/product');

module.exports = [{
  method: 'GET',
  path: '/product',
  config: {
    auth: 'simple',
    handler: product.fetchProduct,
  },
}];
