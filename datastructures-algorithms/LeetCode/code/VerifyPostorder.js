/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (postorder.length === 0) {
    return true;
  }

  function recur(postorder, left, right) {
    let p = left;
    while (postorder[p] < postorder[right]) {
      p++;
    }
    let m = p;
    while (postorder[p] > postorder[right]) {
      p++;
    }
    return (p === right) && recur(postorder, left, m - 1) && recur(postorder, m, right);
  }

};