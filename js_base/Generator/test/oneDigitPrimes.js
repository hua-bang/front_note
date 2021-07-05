function* oneDigitPrimes() {
  yield 2;
  yield 4;
  yield 6;
}

const primse = oneDigitPrimes();
for (let val of primse) {
  console.log(val)
};