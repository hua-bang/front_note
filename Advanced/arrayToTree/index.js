let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      let newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, newItem.id);
    }
  }
}

const arrayToTree = (arr) => {
  let result = [];
  getChildren(arr, result, 0);
  return result;
}

console.log(arrayToTree(arr));