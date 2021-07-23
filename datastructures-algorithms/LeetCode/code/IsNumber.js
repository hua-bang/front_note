function isNumber(s) {
  // let reg = /^[+-]?\d*(e[-]?\d+)?\.?(\d+)?$/i;
  let reg = /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i;
  return reg.test(s.trim());
}

let s = "+100";
console.log(isNumber(s));