/*@flow*/

// 类型推断
function split(str) {
    return str.split(' ')
}
  
// split(11)

//类型注释

function add(x: number, y: number): number{
    return x + y
}
  
add(23, 11)

var arr: Array<number> = [1,2,3];
arr.push(5);