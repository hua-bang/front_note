// LeetCode 第 39 题：给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。candidates 中的数字可以无限制重复被选取。
// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。

// 思路
// 1. 从空集合开始，每次添加元素
// 2. 每次检查， 总和是否大于目标
// 3. 如果超出目标，则没有必要下去了，尝试其他的元素 (回溯)
// 4. 如果总和等于目标， 则添加到结果集中，并试图尝试其他的集合。

function combinationSum(candidates, target) {
    let results = [];    // 这里是数组 实际存放的元素也是数组
    backtracking(candidates, target, 0, [], results);
    return results;
}

// 去找到符合条件的数组，并push进来
function backtracking(candidates, target, start, solution, results) {
    // 说明 新填入的元素过大 直接return
    if (target < 0) {
        return;
    }

    // 说明 新添加的元素刚好 直接push并return 因为没有必要再基于这个数进行拆分求值
    if (target === 0) {
        results.push(solution);
        return;
    }

    // 以下的情况 说明之前的元素的和还没有达到总target
    // 需要依次遍历后方的元素
    for (let i = start; i < candidates.length; i++) {
        
        // 元素进栈
        solution.push(candidates[i]);   
        
        // 此时的分target值需要改变
        backtracking(candidates, target - candidates[i], i, solution, results);

        // 执行完后出栈
        solution.pop();
    }
}