/**
 * @author hug
 * @date 2021/3/10 10:40
 */
let singleton = function() {
    let obj = new Array();
    obj.add = obj.push;
    return obj;
}();

singleton.push(111);
singleton.add(222);
console.log(singleton);
console.log(singleton.length);
