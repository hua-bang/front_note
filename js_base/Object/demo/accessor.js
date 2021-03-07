/**
 * @author hug
 * @date 2021/3/7 10:18
 */
let book = {
    _name: "JavaScript",
    _year: "2021",
    get name() {
        return this._name;
    }
}
Object.defineProperty(book,"year", {
    get() {
        return this._year;
    },
    set(year) {
        this._year = year;
    }
})
console.log(book.name);
console.log(book.year);
