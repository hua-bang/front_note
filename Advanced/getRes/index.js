function getRes(promiseArr) {
  let resultArr = [];
  
  return new Promise((resolve, reject) => {
    getResByPromise(promiseArr.shift());
    
    function getResByPromise(promise) {
      promise().then(res => {
        resultArr.push(res);
        if (promiseArr.length === 0) {
          resolve(resultArr);
        } else {
          let nextPromise = promiseArr.shift();
          getResByPromise(nextPromise);
        }
      }).catch(err => {
        reject(err);
      });
    }

  });
}

let p1 = function () {
  return new Promise((resolve, reject) => {
    console.log("resolve p1");
    setTimeout(() => {
      resolve("p1");
    }, 2000)
  });
}

let p2 = function () {
  return new Promise((resolve, reject) => {

    console.log("resolve p2");
    setTimeout(() => {
      reject("p2");
    }, 2000);
  });
}

getRes([p1, p2]).then(res => {
  console.log(res);
}).catch(err => {
  console.log("err:" + err);
})