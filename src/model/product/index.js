const db = require('../../service/db');

module.exports = {
  getList: () => new Promise(
    (resolve, reject) => {
      const query = db.executeQuery('select * from product')
        .then((data) => {
          resolve(data.rows);
        })
        .catch((err) => {
          reject(err);
        });
    }),
};
