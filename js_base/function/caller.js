/**
 * @author hug
 * @date 2021/3/10 7:53
 */
function inner() {
    console.log(inner.caller);  //过于耦合
    console.log(arguments.callee.caller);   //解耦
}

function outer() {
    inner();
}

outer();    // outer
inner();    // null
