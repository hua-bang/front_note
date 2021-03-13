const wm = new WeakMap();
class StackWeakMap {
    constructor() {
        wm.set(this, {
            items: [],
            count: 0
        });
    }

    push(element) {
        let {
            count,
            items
        } = wm.get(this);
        items[count++] = element;
        wm.set(this, {
            items,
            count
        });
    }

    pop() {
        let {
            count,
            items
        } = wm.get(this);
        if (count === 0) {
            return undefined;
        }
        let val = items[--count];
        delete items[count];
        wm.set(this, {
            count,
            items
        })
        return val;
    }

    peek() {
        let {
            count,
            items
        } = wm.get(this);
        return items[count - 1];
    }

    size() {
        return wm.get(this).count;
    }

    isEmpty() {
        return wm.get(this).count <= 0;
    }

    clear() {
        wm.set(this, {
            count: 0,
            items: {}
        })
    }
}

const stack = new StackWeakMap();
console.log(stack.size()); //0
console.log(stack.isEmpty()); //true
stack.push(2);
console.log(stack.peek()); // 2
stack.push(5);
console.log(stack.size()); //2
console.log(stack.pop()); //5
console.log(stack.size()); //1
stack.clear();
console.log(stack.isEmpty()); //true