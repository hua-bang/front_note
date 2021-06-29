// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/

// 设计题 使用数组即可完成

var CQueue = function () {
    this.arr = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.arr.push(value);
    return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    let val = this.arr.shift() 
    return val ?? -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */