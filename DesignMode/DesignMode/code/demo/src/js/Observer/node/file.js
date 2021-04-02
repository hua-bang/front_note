const fs = require('fs');
const readStream = fs.createReadStream("./file.txt");

let length = 0;

readStream.on('data', function(chunk) {
    let len = chunk.toString().length;
    length += len;
});

readStream.on("test", () => {
    console.log("just test");
})

readStream.on('end', function() {
    console.log(`length: ${length}`);
    readStream.emit("test");
})

