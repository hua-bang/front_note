let arr = [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0]
];


/**
 * DFS遍历
 * @param {*} arr 数组 
 * @returns [] 路径
 */
function DFS(arr) {
    
    const visitor = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!visitor[i]) {
            dfsVisit(arr, i);
        }
    }

    return result;


    function dfsVisit(arr, index) {
        const stack = [];

        stack.push(index);
        visitor[index] = 1;
        result.push(index);

        while (stack.length !== 0) {

            // 弹出栈
            let current = stack[stack.length - 1];
            let hasNextNode = false;

            for (let i = 0; i < arr[current].length; i++) {
                if (!visitor[i] && arr[current][i] === 1) {
                    stack.push(i);
                    result.push(i);
                    hasNextNode = true;
                    visitor[i] = 1;
                    break;
                }
            }

            if (!hasNextNode) {
                stack.pop();
            }

        }
    }

}

console.log(DFS(arr));