const Product = require('../../model/product');

module.exports = {
  getList: (request, reply) => {
    Product.getList()
      .then((data) => {
        reply(data);
      });
  },
};
