const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("test rounding off numbers", function() {
    it("checks sum two integers", function() {
        assert.equal(calculateNumber(1, 3), 4);
    });
});

describe("test rounding off numbers", function() {
    it("checks sum int and float", function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
});

describe("test rounding off numbers", function() {
    it("checks sum two floats", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
});

describe("test rounding off numbers", function() {
    it("checks sum two floats", function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});
