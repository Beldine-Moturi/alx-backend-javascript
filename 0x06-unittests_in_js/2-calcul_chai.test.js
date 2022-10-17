const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe("test rounding off numbers with SUM", function() {
    describe("test two integers", function() {
        it("tests two integers", function() {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
    });

    describe("test rounding off numbers", function() {
        it("tests sum int and float", function() {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests sum two floats", function() {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests sum two floats", function() {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests sum of two floats", function() {
            expect(calculateNumber('SUM', 1.2, 3.1)).to.equal(4);
        });
    });
});

describe("test rounding off numbers with SUBTRACT", function() {
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });
    });

    describe("test subtraction of two integers", function() {
        it("returns -2", function() {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });
    });
    
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
        });
    });
    
    describe("test subtraction of two integers", function() {
        it("returns 2", function() {
            expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests subtraction of two floats", function() {
            expect(calculateNumber('SUBTRACT', 3.1, 1.2)).to.equal(2);
        });
    });

    describe("calculates two floats rounded down:", function() {
        it("tests subtraction of two floats", function() {
            expect(calculateNumber('SUBTRACT', -3.1, 1.2)).to.equal(-4);
        });
    });
});

describe("test rounding off numbers with DIVIDE", function() {
    describe("test two integers", function() {
        it("tests two integers", function() {
            expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        });
    });

    describe("test rounding off numbers", function() {
        it("tests divide int and float", function() {
            expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests divide  two floats", function() {
            expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
        });
    });
    
    describe("test rounding off numbers", function() {
        it("tests divide  two floats", function() {
            expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
        });
    });
    
    describe("calculates two floats rounded down:", function() {
        it("tests divide  of two floats", function() {
            expect(calculateNumber('DIVIDE', 3.1, 1.2)).to.equal(3);
        });
    });

    describe("calculates two floats rounded down:", function() {
        it("tests divide  of two floats", function() {
            expect(calculateNumber('DIVIDE', 3.1, 0.2)).to.equal('Error');
        });
    });
});