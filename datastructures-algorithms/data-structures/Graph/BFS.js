let arr = [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0]
];

function BFS(arr, start = 0) {
    
    // 1. 创建队列
    const queue = [];

    const visited = [];

    const result = [];

    // 2. 选择第一个作为起点
    queue.push(start);
    visited[start] = 1;
    result.push(start);

    // 3. 开始遍历
    while (queue.length !== 0) {
        // 3.1 当前节点已经访问 出队列
        let current = queue.shift();

        // 3.2 遍历邻接矩阵 找到对应的邻接节点 未访问过则放入队列
        for (let i = 0; i < arr[current].length; i++) {
            if (!visited[i] && arr[current][i] === 1) {
                queue.push(i);
                visited[i] = 1;
                result.push(i);
            }
        }
    }

    return result;
}

console.log(BFS(arr,1));

function getWholeRoad(arr) {
    for (let i = 0; i < arr.length; i++) {
        let res = BFS(arr, i);

        if (res.length === arr.length) {
            return res;
        }
    }

    return [];
}

console.log(getWholeRoad(arr));
