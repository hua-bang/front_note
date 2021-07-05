class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;

    return {
      next() {
        console.log("next");
        return (next <= last)
          ? { value: next++ }
          : { done: true }
      },
      return() {
        console.log("return");
        return {}
      },
      [Symbol.iterator]() {
        return this;
      }
    }
  }
}
for (let val of new Range(1, 10)) {
  if (val === 5)
    break;
}