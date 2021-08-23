const compose = (...fns) => {
  if (fns.length === 0) {
    return (...args) => args;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((prev, curr) => (...args) => curr(prev(...args)));
}

let user;

function getToken() {
  console.log("get Token")
  return "this is my token";
}

function request(token) {
  console.log(`request token is ${token}`);
  return {
    name: "hug",
    age: 18,
    token
  }
}

function setData(userInfo) {
  user = userInfo;
}

const fns = compose(getToken, request, setData);

// fns();
// console.log(user);


// ==========================================================================



const composeAsync = (...fns) => {
  if (fns.length === 0) {
    
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((prev, curr) => async (...args) => curr(await prev(args)));
}

async function getTokenAsync() {
  console.log("begin get token")
  await sleep();
  return "get token xxxxxxx";
}

async function requestAsync(token) {
  console.log(`begin request by ${token}`);
  await sleep();
  return {
    name: "hua",
    age: 18,
    token
  };
}

async function setDataAsync(userInfo) {
  console.log(`begin setData`);
  await sleep();
  user = userInfo;
  return userInfo;
}

let fn = composeAsync(getTokenAsync, requestAsync, setDataAsync);
fn().then(res => {
  console.log(res);
})

function sleep(delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay)
  })
}