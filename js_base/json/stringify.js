let a = {
    name: "hug",
    age: 18,
    roles: ["student"],
    test: undefined,
    demo: null
};
console.log(JSON.stringify(a));
console.log(JSON.stringify(a, ["name", "age"]));
console.log(JSON.stringify(a, (key, val) => {
    switch (key) {
        case "name":
            return "hua";
        default:
            return val;
    }
}));
console.log(typeof JSON.stringify(a));
a = {
    name: "hug",
    age: 18,
    roles: ["student"],
    test: undefined,
    demo: null,
    toJSON: () => {
        return "Json";
    }
}
console.log(JSON.stringify(a));