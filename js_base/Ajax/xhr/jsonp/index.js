function handleResponse(response) {
    console.log(response);
}

let script = document.createElement("script");
script.src = "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws&callback=handleResponse";
document.body.append(script);