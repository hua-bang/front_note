var checkValidString = function (s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      leftStack.push(i);
    } else if (s[i] === "*") {
      asteriskStack.push(i);
    } else {
      if (leftStack.length) {
        leftStack.pop();
      } else if (asteriskStack.length) {
        asteriskStack.pop();
      } else {
        return false;
      }
    }
  }

  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();
    if (leftIndex > asteriskIndex) {
      return false;
    }
  }
  return leftStack.length === 0;
};
