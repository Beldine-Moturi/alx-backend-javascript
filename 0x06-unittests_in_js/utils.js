const Utils = {
    calculateNumber: function calculateNumber (type, a, b) {
        const firstNum = Math.round(a);
        const secondNum = Math.round(b);
    
        if (type === "SUM") {
            return (firstNum + secondNum);
        } else if (type === "SUBTRACT") {
            return (firstNum - secondNum);
        } else if (type === "DIVIDE") {
            if (secondNum === 0) return "Error";
            return (firstNum / secondNum);
        }
    }
}

module.exports = Utils;
