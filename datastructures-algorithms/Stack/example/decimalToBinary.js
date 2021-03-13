const Stack = require("../Stack.js")

function decimalToBinary(decNumber) {
    const stack = new Stack();
    while (decNumber !== 0) {
        let pattern = decNumber % 2;
        stack.push(pattern); //入栈
        decNumber = parseInt(decNumber / 2);
    }
    let str = "";
    while (!stack.isEmpty()) {
        str += stack.pop();
    }
    return str;
}

console.log(decimalToBinary(10));