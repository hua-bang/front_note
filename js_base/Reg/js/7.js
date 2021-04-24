console.log("hddddd".match(/hd+/));
console.log("hhhhhhhhdhdhd".match(/(hd)+/));

// 验证座机
console.log(/^0\d{2,3}-\d{7,8}$/.exec("0010-12345678"))