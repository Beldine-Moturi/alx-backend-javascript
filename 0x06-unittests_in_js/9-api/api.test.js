const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('Intergration Testing', () => {
    describe("test GET / localhost", function() {
        it("tests return of correct status code and data", function() {
            request("http://localhost:7865", (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                //done();
            });
        });
    });

    describe('GET /cart/10', () => {
        it('Respond with statusCode: 200 and id 10', (done) => {
            request("http://localhost:7865/cart/10", function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 10');
                done();
            });
        });
    });

    describe('GET /cart/1', () => {
        it('Respond with statusCode: 200 and id 1', (done) => {
            request("http://localhost:7865/cart/1", function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 1');
                done();
            });
        });
    });

    describe('GET /cart/a1', () => {
        it('Respond with 404', (done) => {
            request("http://localhost:7865/cart/a1", function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/hello', () => {
        it('Respond with 404', (done) => {
            request("http://localhost:7865/cart/hello", function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/', () => {
        it('Respond with 404', (done) => {
            request("http://localhost:7865/cart/", function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});
