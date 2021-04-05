var myTask = `
    console.log(this.onmessage === onmessage);
    onmessage = function (e) {
        var data = e.data;
        console.log('worker:', data); // worker: [1, 2, 3, "hello"]
        postMessage(data);
    };
`;

var blob = new Blob([myTask]);
var myWorker = new Worker(window.URL.createObjectURL(blob));

myWorker.onmessage = function (e) {
    var data = e.data;
    console.log('page:', data); // page: [1, 2, 3, "hello"]
    console.log('arr:', arr); // arr: [1, 2, 3]
};

var arr = [1,2,3];
myWorker.postMessage(arr);