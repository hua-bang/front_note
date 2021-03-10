/**
 * @author hug
 * @date 2021/3/10 9:56
 */
function Counter() {
    let count = 0;
    this.add = function() {
        count++;
    }
    this.getCount = function () {
        return count;
    }
}

let count = new Counter();
count.add();
count.add();
console.log(count.getCount());
let count1 = new Counter();
console.log(count1.getCount());
