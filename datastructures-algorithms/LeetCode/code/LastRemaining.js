function lastRemaining(n, m) {
  return fn(n, m);
}

function fn(n, m) {
  if (n === 1) {
    return 0;
  }
  let x = fn(n - 1, m);
  return (x + m) % n;
}

console.log(lastRemaining(3, 5));