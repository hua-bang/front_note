class MedianFinder {
  minArr: number[]
  maxArr: number[]

  constructor() {
    this.minArr = [];
    this.maxArr = [];
  }

  addNum(num: number): void {
    if (!this.minArr.length || num <= this.minArr[this.minArr.length - 1]) {
      this.minArr.push(num);
      if (this.maxArr.length + 1 < this.minArr.length) {
        this.maxArr.push(this.minArr.pop());
      }
    } else {
      this.maxArr.push(num);
      if (this.maxArr.length > this.minArr.length) {
        this.minArr.push(this.maxArr.pop());
      }
    }

  }

  findMedian(): number {
    if (this.minArr.length > this.maxArr.length) {
      return this.minArr[this.minArr.length - 1];
    }
    return (this.minArr[this.minArr.length - 1] + this.maxArr[this.maxArr.length - 1]) % 2;
  }
}


var obj = new MedianFinder()
obj.addNum(num)
var param_2 = obj.findMedian()
 