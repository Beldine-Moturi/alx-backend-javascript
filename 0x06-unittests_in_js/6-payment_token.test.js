const chai = require("chai");
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function () {
    describe('Arg = true?', function () {
        it('Resolved to true.', function (done) {
            getPaymentTokenFromApi(true)
              .then((res) => {
                expect(res).to.include({ data: 'Successful response from the API' });
                done();
              })
              .catch((err) => done(err));
        });
    });
});
