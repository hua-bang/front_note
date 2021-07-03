// thought
// 1. you can sort the data when you get the middle num
// 2. you can add num in order.

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    
    // 1. the data arr is empty, you should push
    if (this.data.length === 0) {
        this.data.push(num);
        return;
    }

    let left = 0, right = this.data.length - 1;

    while (left < right) {
        // 2. find middle index, and equals the num
        let mid =  Math.floor((left + right) / 2);
        // 2.1 if equals, you can only add num after mid
        if (this.data[mid] === num) {
            this.data.splice(mid, 0, num);
            return;
        } else if (this.data[mid] > num) {
            // 2.2 if num < this.data.mid, we should turn section, your know, the num in left < mid [left, mid - 1]
            right = mid - 1;
        } else if (this.data[mid] < num) {
            // 2.3 [mid + 1, right]
            left = mid + 1;
        }
    }

    // out of while, the right index is the position which the num should insert
    if (this.data[right] >= num) {
        this.data.splice(right, 0, num);
    } else {
        this.data.splice(right + 1, 0, num);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const length = this.data.length;
    if (!length) {
        return null;
    }

    const mid = Math.floor((length - 1) / 2);
    if (length % 2) {
        return this.data[mid]
    } else {
        return (this.data[mid] + this.data[mid + 1]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let m = new MedianFinder();
m.data = [1, 3, 5, 7, 10];
m.addNum(8);