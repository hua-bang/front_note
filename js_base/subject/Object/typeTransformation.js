let a = {
    num: 0,
    valueOf() {
        return ++this.num;
    },
    toString() {
        return ++this.num;
    }
}

// 从中可以看出，原始值达不到要求
// 引用值的话会先看valueOf 再看toString
if(a == 1 && a == 2 && a == 3) {
    console.log("ok");
}