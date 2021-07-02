let activeUpdate;

function observe(obj) {
    Object.keys(obj)
        .forEach(key => {
            let interalValue = obj[key];
            const dep = new Dep();
            Object.defineProperty(obj, key, {
                get() {
                    dep.depend();   // 依赖收集
                    return interalValue;
                },
                set(newValue) {
                    const isChanged = interalValue !== newValue
                    if (isChanged) {
                        interalValue = newValue;
                        dep.notify();   
                    }
                }
            })
        })
}

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


function autoRun(update) {
    
    function wrappedUpdate() {
        activeUpdate = wrappedUpdate;
        update();
        activeUpdate = null;
    }

    wrappedUpdate();
}

let state = {
    count: 0
};

observe(state);

autoRun(() => {
    console.log(state.count);
    console.log(state.count * 2);
})

state.count++;