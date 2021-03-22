class Router {

    constructor() {
        this.routes = {};
        this.listenLink();
        this.listenPopstate();
    }

    register(path, callback = () => {}) {
        this.routes[path] = callback;
    }

    registerIndex(callback = () => {}) {
        this.routes["/"] = callback;
    }

    registerError(callback = () => {}) {
        this.routes["error"] = callback;
    }

    registerNotFound(callback = () => {}) {
        this.routes["404"] = callback;
    }

    load() {
        let path = location.path;
        this.handle(path);
    }

    handle(path) {
        let method;
        if(!path) {
            method = this.routes["/"];
        }else if(this.routes.hasOwnProperty(path)) {
            method = this.routes[path];
        }else {
            method = this.routes["404"];
        }

        try{
            method.call(this);
        }catch(err) {
            (this.routes["error"] || (() => {})).call(this, err);
        }
    }

    listenLink() {
        window.addEventListener("click", (e) => {
            let dom = e.target;
            if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                e.preventDefault()
                this.assign(dom.getAttribute('href'));
            }
        }, false)
    }

    listenPopstate() {
        window.addEventListener("popstate", (e) => {
            let state = e.state || {},
                path = state.path || '';
            this.handle(path);
        })
    }

    assign(path) {
        history.pushState({path},null,path);
        this.handle(path);
    }

    replace(path) {
        history.replaceState({path},null,path);
        this.handle(path);
    }
}

export default Router;