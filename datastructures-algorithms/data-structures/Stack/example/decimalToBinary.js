const Stack = require("../Stack.js")

function decimalToBinary(decNumber) {
    return decimalChange(decNumber, 2);
}

console.log(decimalToBinary(10));

function decimalChange(decNumber, num) {
    const stack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while (decNumber !== 0) {
        let pattern = decNumber % num;
        pattern = digits[pattern];
        stack.push(pattern); //入栈
        decNumber = parseInt(decNumber / num);
    }
    let str = "";
    while (!stack.isEmpty()) {
        str += stack.pop();
    }
    return str;
}

console.log(decimalChange(15, 16));