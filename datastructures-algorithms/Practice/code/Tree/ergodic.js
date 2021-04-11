let root = {
    id: 1,
    left: {
        id: 2,
        left: {
            id: 4,
        },
        right: {
            id: 5
        }
    },
    right: {
        id: 3,
        left: {
            id: 6
        },
        right: {
            id: 7
        }
    }
}

let arr = [];

// function DLR(root) {
//     if (root) {
//         arr.push(root.id)
//     }
//     if (root.left) {
//         DLR(root.left)
//     }
//     if (root.right) {
//         DLR(root.right);
//     }
// }

// DLR(root);
// console.log(arr);

// 非递归思想
// 就是把递归的遍历编程循环模式，将需要遍历的树放在arr中，用pop方法，返回这个大树，去除树的根，再将根的右子树，左子树放入arr

function DLR(root) {
    let res = [],
        arr = [];
    if (root !== null) {
        arr.push(root);
    }
    while (arr.length !== 0) {
        let temp = arr.pop();
        res.push(temp.id);
        if (temp.right) {
            arr.push(temp.right);
        }
        if (temp.left) {
            arr.push(temp.left);
        }
    }
    return res;
}

console.log(DLR(root));

// 中序遍历
function LDR(root) {
    let res = [],
        arr = [];
    while (true) {
        while (root != null) {
            arr.push(root);
            root = root.left;
        }

        if (arr.length === 0) {
            break;
        }

        let temp = arr.pop();
        res.push(temp.id);
        root = temp.right;
    }
    return res;
}

function LRD(root) {
    let arr = [];
    arr.push(root);
    return res
}

console.log(DLR(root));
console.log(LDR(root));
// console.log(LRD(root));