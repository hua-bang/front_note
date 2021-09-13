function getDistance(p1: number[], p2: number[]) {
  return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
}

function numberOfBoomerangs(points: number[][]): number {
  let ans = 0;
  points.forEach(point1 => {
    const map: Map<number, number> = new Map();
    points.forEach(point2 => {
      if (point1 !== point2) {
        let distance = getDistance(point1, point2);
        map.set(distance, (map.get(distance) || 0) + 1);
      }
    });
    for (const v of map.values()) {
      ans += v * (v - 1);
    }
  });

  return ans;
};

let points = [[0, 0], [1, 0], [2, 0]];
let res = numberOfBoomerangs(points);

console.log(res);