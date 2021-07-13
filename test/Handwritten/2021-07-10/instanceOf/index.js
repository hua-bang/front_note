function _instanceOf(obj, Fn) {
  let proto = obj.__proto__;
  
  while (proto) {
    if (proto === Fn.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }

  return false;
}

console.log(_instanceOf([1, 23, 4, 5], Object));