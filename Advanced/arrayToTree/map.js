let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

function arratToTree(data) {
  let map = new Map();
  let result = [];
  data.forEach((item) => {
    if (!map.has(item.pid)) {
      result.push(item);
    } else {
      let parent = map.get(item.pid);
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    }
    map.set(item.id, item);
  });
  return result;
};

console.log(arratToTree(arr));