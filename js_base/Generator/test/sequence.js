function* sequence(...iterables) {
  for (let iter of iterables) {
    yield* iter;
  }
}

console.log([...sequence("abc",[1,2,3,4,5])])