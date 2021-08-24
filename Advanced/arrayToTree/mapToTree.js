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
    let id = item.id;
    let pid = item.pid;
    let newItem = map.get(id);
    newItem = {
      ...item,
      children: newItem ? newItem.children : []
    }
    if (pid === 0) {
      result.push(newItem);
    } else {
      let parent = map.get(pid);
      if (!parent) {
        parent = {
          children: []
        };
        map.set(pid, parent);
      };
      parent.children.push(newItem);
    }
    map.set(id, newItem);
  });
  return result;
};

console.log(arratToTree(arr.reverse()));