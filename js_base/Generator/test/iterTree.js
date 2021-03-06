/**
 * @author hug
 * @date 2021/3/6 17:20
 */
function* iterTree(tree) {
    // 是数组的话
    if(Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    }else {
        // 不是数组的话
        yield tree;
    }
}

for (const leaf of iterTree([1,2,4,[5,7],[9,11]])) {
    console.log(leaf)
}
