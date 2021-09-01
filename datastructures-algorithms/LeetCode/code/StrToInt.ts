function strToInt(str: string): number {
  if (str.length === 0) {
    return 0;
  }
  str = str.trim();
  let total = 0, index = 0, sign = 1, min = - (2 ** 31), max = (2 ** 31) - 1;
  
  if (str[index] === "+" || str[index] === "-") {
    sign = str[index] === "+" ? 1 : -1;
    index++
  }

  while (index < str.length) {
    if (str.charCodeAt(index) < 48 || str.charCodeAt(index) > 57) {
      break;
    }
    total = total * 10 + (str.charCodeAt(index) - "0".charCodeAt(0));
    index++;
  }

  let num = total * sign;

  return num <= min ? min : num >= max ? max : num
}

function strToInt(str: string): number {
  str = str.trim();
  let reg: RegExp = /^[+-]?\d+/;
  let match: Array<any> | null = str.match(reg);
  
  if (!match) {
    return 0;
  }

  let num = match[0];

  const min = - (2 ** 31), max = (2 ** 31) - 1
  return num <= min ? min : num >= max ? max : num;
};