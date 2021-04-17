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

let map = new Map();
map.set("a", 100);
map.set("b", 200);

each([1, 2, 3, 4, 5], (val) => {
    console.log(++val);
});

each(map, (val) => {
    console.log(val);
});