let size = 256;
function generateBC(b, m, bc) {
  for (let i = 0; i < size; i++) {
    bc[i] = -1;
  }
  for(let i = 0; i < m; ++i) {
    let ascii = b[i]; // 计算b[i]的ASCII值 
    bc[ascii] = i;
  }
}

function bm(a, n, b, m) {
  let bc = new Array(size);
  generateBC(b, m, bc);
  let i = 0;
  while (i <= n - m) {
    let j;
    for (j = m - 1; j >= 0; j--) {
      if (a[i + j] !== b[j]) {
        break;
      }
    }
    if (j < 0) {
      return i;
    }
    i = i + (j - bc[a[i + j]]);
  }
  return -1;
}

function generateGS(b, m, suffix, prefix) {
  for (let i = 0; i < m; i++) {
    suffix[i] = -1;
    prefix[i] = false;
  }
  for (let i = 0; i < m - 1; i++) {
    let j = i;
    let k = 0;
    while (j >= 0 && b[j] === b[m - 1 - k]) {
      --j;
      ++k;
      suffix[k] = j + 1;
    }
    if (j === -1)
      prefix[k] = true;
  }
}