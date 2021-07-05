function knapSack(w, val, capacity) {
    let dp = [];

    for (let i = 0; i < val.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= capacity; j++) {
            if (j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (j < w[i]) {
                if (i === 0) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
                continue;
            }
            if (i === 0) {
                dp[i][j] = val[i];
            } else {
                dp[i][j] = Math.max((val[i] + dp[i-1][j-w[i]]), dp[i-1][j]);
            }
        }
    }

    findValue(w, val, capacity, dp);
    
    return dp;
}

function findValue(w, val, capacity, dp) {
    let i = w.length - 1, j = capacity;

    while (i > 0 && j > 0) {
        if (dp[i][j] != dp[i - 1][j]) {
            console.log('选择物品' + i + ',重量：' + w[i] + ',价值：' + val[i]);
            j = j - w[i];
            i--;
        } else {
            i--;
        }
    }
    if (i == 0) {
        if(dp[i][j] != 0){ //那么第一行的物品也可以取
			console.log('选择物品'+i+',重量：'+ w[i] +',价值：' + val[i]);
		}
    }
}

let values = [3,4,5],
	weights = [2,3,4],
	capacity = 5,
	n = values.length;

console.log(knapSack(weights,values,capacity,n));