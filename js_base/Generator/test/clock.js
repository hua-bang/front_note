/**
 * @author hug
 * @date 2021/3/6 17:27
 */
//状态机的实现
function* clocker () {
    while (true) {
        console.log("tick");
        yield;
        console.log("tock");
        yield;
    }
}
let clock = clocker();
clock.next();
clock.next();
clock.next();
clock.next();
clock.next();
clock.next();
