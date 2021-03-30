let a = {
    num: 0,
    words: "",
    valueOf() {
        return ++this.num;
    },
    toString() {
        return this.words + "a";
    },
    [Symbol.toPrimitive]() {
        return ++this.num;
    }
}

// 从中可以看出，原始值达不到要求
// 引用值的话 会先看对象中有没有[Symbol.toPrimitive]属性，再先看valueOf 再看toString
if(a == 1 && a == 2 && a == 3) {
    console.log("ok");
}

if(a == "a") {
    console.log("string-ok");
}