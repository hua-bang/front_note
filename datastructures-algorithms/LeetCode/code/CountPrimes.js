// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnzlu6/

var countPrimes = function(n) {
    let notPrimes = {};
    let count = 0;
    for(let i = 2; i < n; i++) {
        if (notPrimes[i])
            continue;
        count++;
        for (let j = i; j < n; j += i)
            notPrimes[j] = true;
    }
    return count;
};