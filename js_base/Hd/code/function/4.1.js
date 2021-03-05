// (function(window){
//     function hd() {
//         console.log("4.1.js-hd")
//     }
//     function show() {
//         console.log("4.1.js-show")
//     }
//     window.js1 = { hd,show };
// })(window)


{
    let hd = () => {
        console.log("4.1.js-hd");
    }

    let show = () => {
        console.log("4.1.js-show")
    }

    window.js1 = {hd,show};
}