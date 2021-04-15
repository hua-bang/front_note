let arr1 = new Array();
let arr2 = new Array(10);
let arr3 = new Array('a');
let arr4 = new Array(10, 'a');

let arr5 = [1,23,3,5];
let arr6 = Array.of(3); 
// 参数可以是各种类型
let arr7 = Array.of(1, 'a', true, null, undefined, {name: "zhangsan"}, [45]);
let arr8 = Array.of(...arr7);
