const db = require('../../db');

module.exports = {
  fetchProduct: (request, reply) => {
    const query = db.executeQuery('select * from product');
    query.on('end', (data) => {
      reply(data.rows);
    });
  },
};
