class MaxQueue {
  queue: Array<number>
  maxQueue: Array<number>
  constructor() {
    this.queue = [];
    this.maxQueue = [];
  }

  max_value(): number {
    return this.maxQueue.length !== 0 ? this.maxQueue[0] : -1;
  }

  push_back(value: number): void {
    this.queue.push(value);
    while ((this.maxQueue.length) && (this.maxQueue[this.maxQueue.length - 1] < value)) {
      this.maxQueue.pop();
    }
    this.maxQueue.push(value);
  }

  pop_front(): number {
    let value = this.queue.shift();
    if (value === this.maxQueue[0]) {
      this.maxQueue.shift();
    }
    return value ? value : -1;
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */