let url = "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws";

let f = fetch(url);
console.log(f); //Promise <Pending>

// 分派请求
// f.then(res => res.text()).then(data => {
//     data = JSON.parse(data);
//     console.log(data);
// })

f.then(res => {
    res.text().then(data => {
        console.log(JSON.parse(data));
    })
});

fetch(url).then(res => {
    console.log(res.status);
    console.log(res.statusText);    //看游览器兼容性 200时网无ok
});

fetch("/aaa.cssa.com").then(res => {
    console.log(res.status);    //404
    console.log(res.statusText);    //看游览器兼容性
});