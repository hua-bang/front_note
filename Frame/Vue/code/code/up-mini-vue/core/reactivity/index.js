let currentEffect;
class Dep {
  constructor(val) {
    // 避免收集到重复的依赖
    this.effects = new Set();
    this._val = val;
  }

  get value() {
    this.depend();
    return this._val;
  }

  set value(val) {
    this._val = val;
    this.notice();
  }

  // 收集依赖
  depend() {
    if (currentEffect)
      this.effects.add(currentEffect);
  }

  // 通知依赖更新
  notice() {
    this.effects.forEach(effect => {
      effect();
    })
  }
}

export function effectWatch(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}

function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

const targetMap = new Map();

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      let dep = getDep(target, key);
      // 依赖收集
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      let result = Reflect.set(target, key, value);
      let dep = getDep(target, key);
      // 通知依赖
      dep.notice();
      return result;
    }
  })
}