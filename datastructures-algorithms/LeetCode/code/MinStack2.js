/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);

  if (this.minArr.length > 0) {
    if (x <= this.minArr[this.minArr.length - 1]) {
      this.minArr.push(x);
    }
  } else {
    this.minArr.push(x);
  }
  console.log(this.minArr);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let x = this.stack.pop();
  if (x === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop();
  }
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */