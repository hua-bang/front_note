/**
 * @author hug
 * @date 2021/3/6 12:29
 */
class Obj {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    [Symbol.iterator]() {
        let current = this;
        return {
            next:() => {
                if(current !== null) {
                    let value = current.value
                    current = current.next;
                    return {done:false,value}
                }else {
                    return {done:true,value:undefined}
                }
            }
        }
    }
}

let a = new Obj(1);
let b = new Obj(2);
let c = new Obj(3);
a.next = b;
b.next = c;
for (const val of a) {
    console.log(a);
}
