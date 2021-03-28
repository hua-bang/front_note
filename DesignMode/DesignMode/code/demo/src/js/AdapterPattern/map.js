class Map {
    constructor(kind) {
        this.kind = kind;
    }

}

class GoogleMap extends Map {
    show() {
        return `开始渲染${this.kind}地图`;
    }    
}

class BaiduMap extends Map {
    display() {
        return `开始渲染${this.kind}地图`;
    }
}

function renderMap(map) {
    if(map.show instanceof Function){
        console.log(map.show());
    }else {
        throw new Error("no this function");
    }
}

class BaiduMapAdapter {
    constructor(map) {
        this.adaptee = map;
    }
    show() {
        return this.adaptee.display();
    }
}

let gMap = new GoogleMap("google");
let bMap = new BaiduMap("baidu");
let adapter = new BaiduMapAdapter(bMap);
renderMap(gMap);
renderMap(adapter);

export {
    Map
};