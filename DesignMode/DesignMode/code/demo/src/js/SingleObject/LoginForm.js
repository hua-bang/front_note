class LoginForm {
    constructor() {
        this.state = false; //默认关闭
    }

    show() {
        if(this.state) {
            alert("already show");
        }else {
            this.state = true;
            alert("show");
        }
    }

    hide() {
        if(!this.state) {
            alert("already hide");
        }else {
            this.state = false;
            alert("hide")
        }
    }
}

LoginForm.getInstance = (() => {
    let instance;
    return () => {
        if(!instance) {
            instance = new LoginForm();
        }
        return instance;
    }
})();

let formA = LoginForm.getInstance();
let formB = LoginForm.getInstance();
let formC = new LoginForm();
formA.show();
formB.show();
// formC.show();
console.log(formA === formB);
// formC.show();

export {LoginForm}