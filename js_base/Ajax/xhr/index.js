let xhr = new XMLHttpRequest();
xhr.onprogress = ((event) => {
    console.log(event);
    console.log(event.lengthComputable);
})
xhr.open("get","https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws");
xhr.setRequestHeader("token", "hua-bang-token");
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
// }
xhr.onload = (event) => {
    console.log(xhr);
    console.log("event",event)
}
xhr.send(null);
console.log(xhr);