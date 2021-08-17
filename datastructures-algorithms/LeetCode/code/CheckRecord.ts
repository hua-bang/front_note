// https://leetcode-cn.com/problems/student-attendance-record-i/submissions/

function checkRecord(s: string): boolean {
  let absentCount = 0;
  let continuousLatenessDay = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      continuousLatenessDay += 1;
      if (continuousLatenessDay >= 3) {
        return false;
      }
    } else {
      continuousLatenessDay = 0;
      if (s[i] === "A") {
        absentCount += 1;
        if (absentCount >= 2) {
          return false;
        }
      }
    }
  }
  return true;
};