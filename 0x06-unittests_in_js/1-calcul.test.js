const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("test rounding off numbers with SUM", function() {
    describe("test two integers", function() {
        it("tests two integers", function() {
            assert.equal(calculateNumber('SUM', 1, 3), 4);
        });
    });

    describe("test rounding off numbers", function() {
        it("tests sum int and float", function() {
            assert.equal(calculateNumber('SUM', 1, 3.7), 5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests sum two floats", function() {
            assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests sum two floats", function() {
            assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests sum of two floats", function() {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.1), 4);
        });
    });
});

describe("test rounding off numbers with SUBTRACT", function() {
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
        });
    });

    describe("test subtraction of two integers", function() {
        it("returns -2", function() {
            assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
        });
    });
    
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        });
    });
    
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests subtraction of two floats", function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.1, 1.2), 2);
        });
    });

    describe("calculates two floats rounded down:", function() {
        it("tests subtraction of two floats", function() {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.1, 1.2), -4);
        });
    });
});

describe("test rounding off numbers with DIVIDE", function() {
    describe("test two integers", function() {
        it("tests two integers", function() {
            assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
        });
    });

    describe("test rounding off numbers", function() {
        it("tests divide int and float", function() {
            assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests divide  two floats", function() {
            assert.equal(calculateNumber('DIVIDE', 3.7, 1.2), 4);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests divide  two floats", function() {
            assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests divide  of two floats", function() {
            assert.strictEqual(calculateNumber('DIVIDE', 3.1, 1.2), 3);
        });
    });

    describe("calculates two floats rounded down:", function() {
        it("tests divide  of two floats", function() {
            assert.strictEqual(calculateNumber('DIVIDE', 3.1, 0.2), 'Error');
        });
    });
});