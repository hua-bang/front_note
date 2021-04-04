let nextTick = function(callbacks) {
    
    function handler(callbacks) {
        if(callbacks instanceof Array) {
            callbacks.forEach(callback => {
                callback();
            })
        } else {
            callbacks();
        }
    }

    Promise.resolve().then(() => {
        handler(callbacks);
    });
}

nextTick(() => {
    console.log("1");
});

nextTick([
    () => {console.log(3)},
    () => {console.log(4)},
    () => {console.log(5)},
    () => {console.log(6)}
]);

console.log("2");