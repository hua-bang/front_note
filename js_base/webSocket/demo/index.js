const URL = "wss://socket.idcd.com:1443";
let socket = new WebSocket(URL);

const sender = document.querySelector("#sender");
const sendBtn = document.querySelector("#send_btn");
const sendUl = document.querySelector("#send_list");
const receiverUl = document.querySelector("#receiver_list");

sendBtn.addEventListener('click', () => {
    let text = sender.value;
    socket.send(text);
    createLi(sendUl,text);
})

socket.onmessage = ({data}) => {
    createLi(receiverUl, data);
}

function createLi(el, text) {
    let li = document.createElement("li");
    li.textContent = text;
    el.append(li);
}

socket.onopen = () => {
    console.log("connect successful")
};

socket.onerror = () => {
    alert("网络出错，清楚数据");
}

socket.onclose = () => {
    alert("关闭");
}

function removeData() {
    sender.value = "";
    sendUl.innerHTML = "";
    receiverUl.innerHTML = "";
}