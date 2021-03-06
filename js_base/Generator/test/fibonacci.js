/**
 * @author hug
 * @date 2021/3/6 16:46
 */

function* fibonacci(limit) {
    let [prev,curr] = [0,1];
    for (;;){
        if(curr <= limit){
            yield curr;
            [prev, curr] = [curr,prev+curr];
        }else {
            break;
        }
    }
}

for (let n of fibonacci(1000)) {
    console.log(n);
}
