const Product = require('../../model/product');

module.exports = {
  getList: async (request, reply) => {
    const data = await Product.getList();
    reply(data);
  },
};
