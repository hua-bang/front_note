const Deque = require("./Deque.js");

function palindromeChecker(string) {
    const lowerString = string.toLocaleLowerCase();
    const deque = new Deque();
    let isEqual = true;
    for (const val of lowerString) {
        deque.addBack(val);
    }
    while (deque.size() > 1 && isEqual) {
        let first = deque.removeFront();
        let last = deque.removeEnd();
        isEqual = first === last;
    }
    return isEqual;
}

console.log(palindromeChecker("aaa")); //true
console.log(palindromeChecker("baaab")); //true
console.log(palindromeChecker("baabab")); //false