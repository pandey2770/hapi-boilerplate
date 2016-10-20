const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();

const ProductHandler = require('../../../src/handler/product');

lab.test('ProductHandler should have method getList defined', (done) => {

    Code.expect(ProductHandler.getList).to.not.be.undefined;
    done();
});
