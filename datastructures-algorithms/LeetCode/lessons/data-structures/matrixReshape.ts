function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const total = m * n;
  if ( total !== r * c) {
    return mat;
  }

  const result = new Array(r).fill(0).map(item => (new Array(c).fill(0)));
  for(let i = 0; i < total; i++) {
    result[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return result;
};