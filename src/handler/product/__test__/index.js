const Code = require('code'); // eslint-disable-line import/no-extraneous-dependencies
const Lab = require('lab'); // eslint-disable-line import/no-extraneous-dependencies

const lab = Lab.script();

lab.test('Returns true when 1 + 1 is equal to 2', (done) => {

    Code.expect(1 + 1).to.equal(2);
    done();
});
