// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/e2t5ug/

// 使用两个队列来维护
// 难点 如何保证max的操作为O(1)
// 若单只保存最大值，则次大值不一定能遇见
// 1. 使用队列保存 队列的top即为最大值
// 2. 每次插入新元素，比新元素小的值就不会在影响到max的取值了
//    但之前比他大的，还是需要保留，即新元素应该插入到比他大的元素后一位
// 3. 数据出队列时，如果队列的值等于最大值队列，最大值也要出队列

var MaxQueue = function () {
    this.queue = [];
    this.maxQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.maxQueue.length > 0 ? this.maxQueue[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);

    while((this.maxQueue.length) && (this.maxQueue[this.maxQueue.length - 1] < value ) ) {
        this.maxQueue.pop();
    }

    this.maxQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    let val = this.queue.shift();

    // 出去的元素 刚好等于最大队列的top元素
    if(val === this.maxQueue[0]) {
        this.maxQueue.shift();
    }
    return val ? val : -1;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */