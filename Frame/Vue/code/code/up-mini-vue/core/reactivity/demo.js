// 响应式

// 依赖
let currentEffect;
class Dep {

  constructor(val) {
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

  // 1.收集依赖
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // 2.通知依赖
  notice() {
    // 触发收集到的依赖
    this.effects.forEach(effect => {
      effect();
    })
  }
}

function effectWatch(effect) {
  // 收集依赖
  currentEffect = effect;
  effect();
  currentEffect = null;
}

// const dep = new Dep(10);

// let b;

// effectWatch(() => {
//   b = dep.value + 1;
//   console.log(b);
// })

// // 值发生变更 
// dep.value = 20;

// reactive
// dep -> number string
// object -> key -> dep Object中的每个key对应一个dep

// 1. 这个对象在什么时候改变  --> Proxy 
// vue2 Object.definedProperty
// vue3 Proxy

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

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // key -> dep
      let dep = getDep(target, key);
      // 依赖收集
      dep.depend();

      return Reflect.get(target, key);
    },
    set(target, key, value) {
      // 触发依赖
      let dep = getDep(target, key);
      const result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    }
  })
}

// const user = reactive({
//   age: 19
// });

// let double;
// effectWatch(() => {
//   double = user.age * 2;
//   console.log(double);
// })

// user.age = 20;

module.exports = {
  effectWatch,
  reactive
};