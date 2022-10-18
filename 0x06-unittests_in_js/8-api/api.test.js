const chai = require("chai");
const expect = chai.expect;
const request = require('request');

describe("Basic integration testing", function() {
    describe("test GET / localhost", function() {
        it("tests return of correct status code and data", function() {
            request("http://localhost:7865", (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                //done();
            });
        });
    });
});