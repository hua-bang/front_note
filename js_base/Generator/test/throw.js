/**
 * @author hug
 * @date 2021/3/6 16:27
 */
function* generatorFn() {
    for (const x of [1,2,3]){
        yield x;
    }
}

let g = generatorFn();
console.log(g.next());
try{
    g.throw("foo");
}catch (e) {
    console.log(e)
}
console.log(g.next());


function* generatorFn2() {
    for (const x of [1,2,3]){
        try{
            console.log(x);
            yield x;
        }catch (e) {

        }
    }
}

console.log("===========")
let g2 = generatorFn2();
console.log(g2.next());
try{
    g2.throw("foo");    //会自动执行next并跳过这次返回的结果
}catch (e) {

}
console.log(g2.next());
