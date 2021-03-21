let abortController = new AbortController();

let url = "http://127.0.0.1/api/index.php";
fetch(url, {signal: abortController.signal})
.then(res => { console.log(res) },err => {console.log(err)});

setTimeout(() => {
    abortController.abort();
},1000);