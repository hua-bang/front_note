let activeEffect;

const targetMap = new WeakMap();

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
    let dep = getDep(target, key);
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
  get(target, key, receiver) {
    track(target, key);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    const oldValue = target[key];
    const result = Reflect.set(target, key, value, receiver);
    if (oldValue !== value) {
      trigger(target, key);
    }
    return result;
  }
}

export function reactive(raw) {
  return new Proxy(raw, reactiveHandler);
}

export function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}