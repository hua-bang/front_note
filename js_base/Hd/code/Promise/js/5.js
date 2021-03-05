function ajax(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        if (this.status == 200) {
            callback(JSON.parse(this.response))
        } else {
            throw new Error("加载失败")
        }
    }
}