const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
// const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

describe("hooks in js", function() {
    let spyConsole;
    beforeEach(function () {
        spyConsole = sinon.spy(console, 'log');
    });
    afterEach(function() {
        spyConsole.restore();
    });
    it("tests log of 120 with inputs 100, 20", function() {
        sendPaymentRequestToApi(100, 20);

        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(spyConsole.calledOnce).to.be.true;
    });

    it("tests log of 20 with inputs 10, 10", function() {
        sendPaymentRequestToApi(10, 10);

        expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
        expect(spyConsole.calledOnce).to.be.true;
    });
});
