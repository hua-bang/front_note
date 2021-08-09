class MinStack {
  arr: number[]
  minValArr: number[]

  constructor() {
    this.arr = new Array();
    this.minValArr = new Array();
  }

  push(val: number): void {
    this.arr.push(val);
    if (this.minValArr.length === 0) {
      this.minValArr.push(val);
    } else {
      if (val <= this.minValArr[this.minValArr.length - 1]) {
        this.minValArr.push(val);
      }
    }
  }

  pop(): void {
    let val:number = this.arr.pop();
    if (val === this.minValArr[this.minValArr.length - 1]) {
      this.minValArr.pop();
    } 
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minValArr[this.minValArr.length - 1];
  }
}