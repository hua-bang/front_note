// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/50bp33/

// 设计题 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
// 利用空间换时间

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.minValueStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);

    if(this.minValueStack.length > 0) {
        (this.minValueStack[this.minValueStack.length - 1] >= x) && (this.minValueStack.push(x));
    }else {
        this.minValueStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.arr.pop();
    if(val === this.minValueStack[this.minValueStack.length - 1]) {
        this.minValueStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minValueStack[this.minValueStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */