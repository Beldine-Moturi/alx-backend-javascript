const request = require('request');
const { expect } = require('chai');

describe('API Intergration Test', () => {
    const API_URL = 'http://localhost:7865';

    describe('GET /', () => {
        it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
            const options = {
                url: 'http://localhost:7865',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });

    describe('GET /cart/10', () => {
        it('Respond with statusCode: 200 and id 10', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/10',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 10');
                done();
            });
        });
    });

    describe('GET /cart/1', () => {
        it('Respond with statusCode: 200 and id 1', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/1',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 1');
                done();
            });
        });
    });

    describe('GET /cart/a1', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/a1',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/hello', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/hello',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('POST /login/', () => {
        it('Returns valid response', (done) => {
            request.post(`${API_URL}/login`, {json: {userName: 'Allan'}}, (error, response, body) => {
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Welcome Allan');
                done();
            });
        });
    });

    describe('GET /available_payments/', () => {
        it('Return valid response', (done) => {
            const options = {
                url: 'http://localhost:7865/available_payments/',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.be.equal(200);
                expect(JSON.parse(body))
                .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
                done();
            });
        });
    });
});
