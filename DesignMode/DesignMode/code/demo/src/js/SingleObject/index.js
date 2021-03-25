class SingleObject {

    login() {
        console.log("login")
    }

    static getInstance() {
        if(!SingleObject.instance) {
            SingleObject.instance = new SingleObject();
        }
        return SingleObject.instance;
    }
}

SingleObject.instance = null;

// SingleObject.getInstance = (() => {
//     let instance;

//     return function() {
//         if(!instance) {
//             instance = new SingleObject();
//         }
//         return instance;
//     }
// })();

let a = SingleObject.getInstance();
let b = SingleObject.getInstance();
console.log(a===b);

export {SingleObject};