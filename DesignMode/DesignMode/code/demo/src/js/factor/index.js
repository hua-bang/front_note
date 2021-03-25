class Product {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Creator {
    static create(name) {
        return new Product(name);
    }
}

// 测试
let p = Creator.create("hug");
console.log(p.getName());

export {
    Product,
    Creator
}