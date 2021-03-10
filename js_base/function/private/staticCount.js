/**
 * @author hug
 * @date 2021/3/10 10:01
 */
let StaticCounter;
(function(){
    let count = 0;
    StaticCounter = function () {};
    StaticCounter.prototype.add = () => {
        count++;
    }
    StaticCounter.prototype.get = () => {
        return count;
    }
})();

let count = new StaticCounter();
console.log(count.get());
count.add();
let count1 = new StaticCounter();
console.log(count1.get());
