let data = [
  { "id": 1, name: "Hug", pid: 0 },
  { "id": 2, name: "Mike", pid: 1 },
  { "id": 3, name: "James", pid: 1 },
  { "id": 4, name: "Nick", pid: 0 },
  { "id": 5, name: "Jane", pid: 4 },
  { "id": 6, name: "Irving", pid: 5 },
]

function generateTree(data) {
  let map = {};
  let res = [];
  data.forEach(v => {
    v.children = [];
    map[v.id] = v;

    if (v.pid !== 0) {
      map[v.pid].children.push(v);
    } else {
      res.push(map[v.id]);
    }
  })

  return res;
}

console.log(generateTree(data));