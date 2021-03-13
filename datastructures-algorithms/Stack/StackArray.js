/**
 * @author hug
 * @date 2021/3/13 9:39
 */
// base array
class StackArray {

    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element)
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length <= 0;
    }

    clear() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }
}

const stack = new StackArray();
console.log(stack.size()); //0
console.log(stack.isEmpty()); //true
stack.push(2);
console.log(stack.peek()); // 2
stack.push(5); //5
console.log(stack.size()); //2
console.log(stack.pop()); //5
console.log(stack.size()); //1
stack.clear();
console.log(stack.isEmpty());