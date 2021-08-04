const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

function reactive(target) {
  let handler = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key, value, receiver);
      }
      return result;
    }
  };

  return new Proxy(target, handler);
}

function ref(raw) {
  const r = {
    get value() {
      track(r, "value");
      return raw;
    },
    set value(newVal) {
      raw = newVal;
      trigger(r, "value");
    }
  }
  return r;
}

function computed(getter) {
  let result = ref();
  effect(() => (result.value = getter()));
  return result;
}


function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

let product = reactive({
  price: 5,
  quantity: 2
});
let salePrice = computed(() => {
  return product.price * 0.9;
});
let total = computed(() => {
  return salePrice.value * product.quantity;
});

console.log(
  `Before updated total (should be 9) = ${total.value} salePrice (should be 4.5) = ${salePrice.value}`
);
product.quantity = 3;
console.log(
  `After updated total (should be 13.5) = ${total.value} salePrice (should be 4.5) = ${salePrice.value}`
);
product.price = 10;
console.log(
  `After updated total (should be 27) = ${total.value} salePrice (should be 9) = ${salePrice.value}`
);
