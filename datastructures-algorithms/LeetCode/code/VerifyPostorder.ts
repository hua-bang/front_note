function verifyPostorder(postorder: number[]): boolean {
  return reduc(0, postorder.length - 1);

  function reduc(left: number, right: number): boolean {
    if (left >= right) {
      return true;
    }
    let p = left;
    while (postorder[p] < postorder[right]) {
      p++;
    }
    let m = p;
    while (postorder[p] > postorder[right]) {
      p++;
    }
    return p === right && reduc(left, m - 1) && reduc(m, right - 1);
  }
};