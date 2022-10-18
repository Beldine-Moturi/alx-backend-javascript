const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    describe('Arg = true?', function () {
        it('Resolved to true.', function (done) {
            getPaymentTokenFromAPI(true)
              .then((res) => {
                expect(res).to.include({ data: 'Successful response from the API' });
                done();
              })
              .catch((err) => done(err));
        });
    });
});
