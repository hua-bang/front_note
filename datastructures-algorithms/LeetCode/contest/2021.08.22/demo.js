

/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function (tasks, sessionTime) {
  let ans = Infinity;
  let timeSlot = new Array(tasks.length).fill(0);

  tasks.sort((a, b) => {
    return b - a;
  });
  dfs(1, 0);

  function dfs(now, cnt) {
    if (cnt >= ans) {
      return;
    }
    if (now == n + 1) {
      ans = min(ans, cnt);
      return;
    }
    //尝试分配到已经租用的缆车上
    for (let i = 1; i <= cnt; i++) {  //分配到已租用缆车
      if (timeSlot[i] + tasks[now] <= sessionTime) {
        timeSlot[i] += tasks[now];
        dfs(now + 1, cnt);
        timeSlot[i] -= tasks[now];  //还原
      }
    }

    // 新开一辆缆车
    timeSlot[cnt + 1] = tasks[now];
    dfs(now + 1, cnt + 1);
    timeSlot[cnt + 1] = 0;
  }
  return ans;
};