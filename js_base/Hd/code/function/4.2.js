// (function(window){
//     function hd() {
//         console.log("4.2.js-hd")
//     }
//     function show() {
//         console.log("4.2.js-show")
//     }
//     window.js2 = { hd,show };
// })(window)

{
    let hd = () => {
        console.log("4.2.js-hd");
    }

    let show = () => {
        console.log("4.2.js-show")
    }

    window.js2 = {hd,show};
}