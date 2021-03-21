class Router {
    constructor() {
        this.routes = {};
    }

    register(hash, callback = () => {}) {
        this.routes[hash] = callback;
    }

    registerIndex(callback = () => {}) {
        this.routes['index'] = callback;
    }

    registerNotFound(callback = () => {}) {
        this.routes["404"] = callback;
    }

    registerError(callback = () => {}) {
        this.routes["error"] = callback;
    }

    load() {
        let hash = location.hash.slice(1), handle;
        if(!hash) {
            handle = this.routes['index']
        }else if(!this.routes.hasOwnProperty(hash)) {
            handle = this.routes["404"];
        } else {
            handle = this.routes[hash];
        }
        try{
            handle.call(this);
        }catch(err) {
            (this.routes["error"] || (() => {})).call(this, err);
        }
    }

}

export default Router;