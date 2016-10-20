// @flow

const Product = require('../../model/product');

module.exports = {
    getList: async (request: Object, reply: Function): Promise => {

        const data = await Product.getList();
        reply(data);
    }
};
