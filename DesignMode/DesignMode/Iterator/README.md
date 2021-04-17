#### 迭代器模式

介绍：用户无需知道结构,顺序返回集合

```js
class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }

    next() {
        return this.hasNext() ? this.list[this.index++] : undefined;
    }

    hasNext() {
        return !(this.index >= this.list.length);
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }

    // 生成遍历器
    getIterator() {
        return new Iterator(this);
    }
}

let arr = [1, 2, 3, 4, 5];
let container = new Container(arr);
let iterator = container.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
```

场景：

- jQuery each
- ES6 Iterator

ES6 iterator为何存在

- 有序的数据类型已经很多了
- 需要统一接口遍历
- 以上数据类型，都有[Symbol.iterator]属性
- 属性值室函数，执行函数返回一个迭代器

```js
function each(data, callback = () => {}) {
    let iterator = data[Symbol.iterator]();
    let item = {
        done: false
    };
    while (!item.done) {
        item = iterator.next();
        if (item.value) {
            callback(item.value);
        }
    }
}
```

Es6Iteratory与Generator