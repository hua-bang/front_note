const result = new Array(8).fill(0);

function cal8queens(row) {

  if (row === 8) {
    return;
  }
  for (let column = 0; column < 8; column++) {
    if (isOk(row, column)) {
      result[row] = column;
      cal8queens(row + 1);
    }
  }

}

function isOk(row, column) {
  let leftup = column - 1, rightup = column + 1;
  for (let i = row - 1; i >= 0; i--) {
    if (result[i] === column) return false;
    if (leftup >= 0 && result[i] == leftup)
      return false;
    if (rightup < 8 && result[i] == rightup)
      return false;
    --leftup;
    ++rightup;
  }
  return true;
}

cal8queens(0);
console.log(result);