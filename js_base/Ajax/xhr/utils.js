function addParam(url, key, value) {
    url += url.indexOf("?") === -1 ? "?" : "&";
    url += encodeURIComponent(key) + "=" + encodeURIComponent(value);
}