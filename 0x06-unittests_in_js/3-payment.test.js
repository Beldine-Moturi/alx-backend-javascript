const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

/* let utils = {
    calculateNumber: spy thing;
}
call sendtopayment api func with argss
assert that utils.calculateNumber was called once with sum and args
*/


describe('sendPaymentRequestToApi', function() {
    it('tests calculateNumber function', function() {
        const spyUtils = sinon.spy(Utils, 'calculateNumber');
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);
        
        expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    });
});
