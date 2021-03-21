let url = "https://fetch.spec.whatwg.org";
// fetch(url)
// .then((response) => response.body)
// .then(async function(body) {
//     let reader = body.getReader();
//     while(true) {
//         let {value,done} = await reader.read();
//         if(done) {
//             break;
//         }
//         console.log(value);
//     }
// })

// fetch(url)
// .then((response) => response.body)
// .then(async function(body) {
//     let reader = body.getReader();
//     let asyncIterable = {
//         [Symbol.asyncIterator]() {
//             return {
//                 next() {
//                     return reader.read();
//                 }
//             }
//         }
//     };
//     for await (const val of asyncIterable) {
//         console.log(val);
//     }
// })

async function* streamGenerator(steam) {
    const reader = steam.getReader();
    while(true) {
        const {value, done} = await reader.read();

        if(done === true) {
            break;
        }

        yield value;
    }
}

fetch(url)
.then(response =>  response.body)
.then(async (body) => {
    for await (val of streamGenerator(body)) {
        console.log((new TextDecoder()).decode(val, {stream: true}));
    }
})