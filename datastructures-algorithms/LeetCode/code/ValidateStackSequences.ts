function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack = [];
  let i = 0, j = 0;
  while ((i < pushed.length) || (j < popped.length)) {
    if (stack.length === 0) {
      stack.push(pushed[i++]);
      continue;
    } else {
      if (stack[stack.length - 1] === popped[j]) {
        stack.pop();
        j++;
      } else {
        if (i === pushed.length) {
          return false;
        } else {
          stack.push(pushed[i++]);
        }
      }
    }
  }

  return stack.length === 0;
};