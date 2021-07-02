class Dep {

    constructor() {
        this.subscribes = new Set();
    }

    depend() {
        if (activeUpdate) {
            this.subscribes.add(activeUpdate);
        }
    }

    notify() {
        this.subscribes.forEach(sub => sub());
    }
}

let activeUpdate;

function autoRun(update) {
    
    function wrappedUpdate() {
        activeUpdate = wrappedUpdate;
        update();
        activeUpdate = null;
    }

    wrappedUpdate();
}


const dep = new Dep();

autoRun(() => {
    dep.depend();
    console.log("updated");
});

dep.notify();   // 更新的时候需要重新收集依赖

