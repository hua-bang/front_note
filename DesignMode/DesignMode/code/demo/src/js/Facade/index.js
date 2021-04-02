class SubA {
    methodA() {
        console.log("A");
    }
}

class SubB {
    methodB() {
        console.log("B");
    }
}

class SubC {
    methodC() {
        console.log("C");
    }
}

class HSystem{
    constructor() {
        this.suba = new SubA();
        this.subb = new SubB();
        this.subc = new SubC();
    }

    methodA() {
        return this.suba.methodA();
    }

    methodB() {
        return this.subb.methodB();
    }

    methodC() {
        return this.subc.methodC();
    }
}

let sys = new HSystem();
sys.methodA();
sys.methodB();
sys.methodC();

export default {HSystem};