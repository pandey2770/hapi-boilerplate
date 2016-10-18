const { getModel } = require('../../model');

module.exports = {
  fetchProduct: (request, reply) => {
    const product = getModel('product');
    if (product) {
      product.find({})
        .exec((err, data) => {
          if (err) {
            throw err;
          }
          reply(data);
        });
    } else {
      reply();
    }
  },
};
