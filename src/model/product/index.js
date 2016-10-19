const db = require('../../service/db');

module.exports = {
  getList: async () => {
    const data = await db.executeQuery('select * from product');
    return data.rows;
  },
};
