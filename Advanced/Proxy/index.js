const targetMap = new WeakMap();
let activeEffect;

function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  return dep;
}

function track(target, key) {
  if (activeEffect) {
    const dep = getDep(target, key);
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  let dep = getDep(target, key);
  dep.forEach(effect => {
    effect();
  })
}

const reactiveHandler = {
  get(target, key) {
    track(target, key);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    let oldValue = target[key];
    let res = Reflect.set(target, key, value);
    if (oldValue !== value) {
      trigger(target, key);
    }
    return res;
  }
}

function createReactiveObj(obj) {
  return new Proxy(obj, reactiveHandler);
}

function reactive(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      obj[key] = createReactiveObj(obj[key]);
    }
  }
  return createReactiveObj(obj);
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

let a = {
  b: {
    a: 2
  },
  c: {
    b: 3
  },
  d: 2
};
let proxy = reactive(a);

watchEffect(() => {
  console.log(proxy.d);
  console.log(proxy.b.a);
})
proxy.d = 3;
proxy.b.a = {
  b: 3
}