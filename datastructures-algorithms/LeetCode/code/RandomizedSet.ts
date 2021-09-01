class RandomizedSet {
  arr: Array<number>
  map: Map<number, number>

  constructor() {
    this.map = new Map();
  }

  insert(val: number): boolean {
    if (this.map.get(val) === null) {
      this.arr.push(val);
      this.map.set(val, this.arr.length);
      return true;
    }
    return false
  }

  remove(val: number): boolean {
    let index: number | null = this.map.get(val);
    if (index === null) {
      return false;
    }
    this.map.set(this.arr[this.arr.length - 1], index);
    this.arr[index] = this.arr[this.arr.length - 1];
    this.map.delete(val);
    this.arr.pop();
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() *  % 9)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */