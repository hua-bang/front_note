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
  dfs(0, 0);

  function dfs(i, count) {
    if (count >= ans) {
      return;
    }
    if (i === tasks.length) {
      ans = Math.min(ans, count);
      return;
    }

    for (let index = 0; index <= count; index++) {
      if ((tasks[i] + timeSlot[index]) <= sessionTime) {
        timeSlot[index] += tasks[i];
        dfs(i + 1, count);
        timeSlot[index] -= tasks[i];
      }
    }
    
    timeSlot[count + 1] = tasks[i];
    dfs(i + 1, count + 1);
    timeSlot[count + 1] = 0;
  }
  return ans;
};

let tasks = [2, 3, 3, 4, 4, 4, 5, 6, 7, 10], sessionTime = 12
console.log(minSessions(tasks, sessionTime));