function parseParam(url) {
    let param = {};

    let index = url.indexOf("?");
    if(index === -1) {
        return;
    }
    const hashIndex = url.indexOf("#");
    const paramStr = url.slice(index + 1, hashIndex);
    const hashStr = hashIndex !==-1 ? url.slice(hashIndex+1) : "";

    param.hash = hashStr;
    paramStr.split("&").forEach(v => {
        let arr = v.split("=");
        param[arr[0]] = arr[1] ? arr[1] : ""; 
    });

    return param;
}

let getParam = (() => {
    let param = parseParam(location.href);
    return function(key) {
        if(!param) {
            param = parseParam(location.href);
        }
        return param[key];
    }
})();