setTimeout(() => {
    console.log("setTimeout");
}, 0);

console.log(1);

new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 0);
}).then(() => {
    console.log("promise in setTimout");
});

new Promise(resolve => {
    resolve();
}).then(() => {
    console.log("promise");
    Promise.resolve().then(() => {
        console.log("promise1 in promise");
    })
    console.log("promise2");
});