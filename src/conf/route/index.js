const Product = require('../../handler/product');

module.exports = [{
  method: 'GET',
  path: '/product',
  config: {
    auth: 'simple',
    handler: Product.getList,
  },
}];
