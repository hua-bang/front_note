class Heap {
  constructor(size) {
    this.data = new Array(size);
    this.size = size;
    this.count = 0; // 0位存放空元素
  }

  insert(val) {
    if (this.count === this.size) {
      return;
    }
    this.count = this.count + 1;
    this.data[this.count] = val;
    let index = this.count;   

    while ((Math.floor(index / 2) >= 0) && (this.data[index] > this.data[Math.floor(index / 2)])) {
      let temp = this.data[Math.floor(index / 2)];
      this.data[Math.floor(index / 2)] = this.data[index];
      this.data[index] = temp;
      index = Math.floor(index / 2);
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  display() {
    console.log(this.data);
  }

  remove() {
    if (this.count === 0) {
      return;
    }
    this.data[1] = this.data[this.count];
    --this.count;
    heapify(a, this.count, 1);
  }

  heapify(a, n, i) {
    while (true) {
      let maxPos = i;
      if (i * 2 <= n && a[i] < a[i * 2]) maxPos = i * 2;
      if (i * 2 + 1 <= n && a[maxPos] < a[i * 2 + 1]) maxPos = i * 2 + 1;
      if (maxPos === i)
        break;
      swap(a, i, maxPos);
      i = maxPos;
    }
  }

  buildHeap(a, n) {
    for (let i = Math.floor(n / 2); i >= 1; --i) {
      heapify(a, n, i);
    }
  }

  sort(a, n) {
    this.buildHeap(a, n);
    let k = n;
    while (k > 1) {
      this.swap(a, 1, k);
      --k;
      this.heapify(a, k, 1);
    }
  }
}

let heap = new Heap(10);
heap.insert(2);
heap.insert(10);
heap.insert(5);
heap.insert(4);
heap.insert(6);
heap.insert(7);
heap.display();