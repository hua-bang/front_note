/**
 * @author hug
 * @date 2021/3/11 8:21
 */
let getQueryStringArs = () => {
    let qs = (location.search.length > 0 ? location.search : "");
    let args = {};
    for (const item of qs.split("&").map(kv => kv.split("="))) {
        let name = decodeURIComponent(item[0]);
        let value = decodeURIComponent(item[1]);
        args[name] = value;
    }
    return args;
}

let args = getQueryStringArs();
console.log(args);

let searchParams = new URLSearchParams(location.search);
console.log(searchParams.get("num"));
