// @flow

const Db = require('../../service/db');

module.exports = {
    getList: async (): Promise => {

        const data = await Db.executeQuery('select * from product');
        return data.rows;
    }
};
