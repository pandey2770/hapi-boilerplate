// @flow

const db = require('../../service/db');

module.exports = {
  getList: async (): Promise => {
    const data = await db.executeQuery('select * from product');
    return data.rows;
  },
};
