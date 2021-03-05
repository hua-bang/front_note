let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
