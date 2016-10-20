// @flow

const Db = require('../../service/db');

module.exports = {
    getList: async (): Promise<any> => {

        const data = await Db.executeQuery('select * from product');
        return data.rows;
    }
};
