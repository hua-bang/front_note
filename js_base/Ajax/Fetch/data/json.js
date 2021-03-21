let payload = JSON.stringify({
    foo: "bar"
});

let jsonHeaders = new Headers({
    "Content-Type": "application/json"
});

fetch("http://127.0.0.1/api/post.php", {
    method: "post",
    body: payload,
    headers: jsonHeaders
})
.then(res => res.text()).then(res => {
    console.log(res);
})

payload = "foo=bar&baz=qux";
let paramHeaders = new Headers({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"  
})

fetch("http://127.0.0.1/api/post.php", {
    method: "post",
    body: payload,
    headers: paramHeaders
})
.then(res => res.text()).then(res => {
    console.log(res);
})