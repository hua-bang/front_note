/**
 * @author hug
 * @date 2021/3/11 8:14
 */

let num = 0;
let max = 10;

let id = setInterval(() => {
    console.log(num++);
    if(num > max) {
        clearInterval(id);
        console.log("done")
    }
},200)
