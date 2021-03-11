/**
 * @author hug
 * @date 2021/3/11 8:03
 */
setTimeout(() => {
  console.log("setTimeout1");
},1000);

let id = setTimeout(() => {
    console.log("setTimout2");
},1000);

setTimeout(() => {
    console.log("clear setTimeout2")
    clearTimeout(id)
},200)
