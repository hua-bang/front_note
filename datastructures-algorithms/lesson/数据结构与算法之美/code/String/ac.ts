class AcNode {
  data: string;
  children: AcNode[] = new Array(26);
  isEndingChar: boolean = false;
  length: number = -1;
  fail: AcNode;

  constructor(data: string) {
    this.data = data;
  }

}

function buildFailurePointer(root: AcNode): void {
  const queue: AcNode[] = new Array();
  root.fail = null;
  queue.push(root);
  while (!queue.length) {
    let p: AcNode = queue.shift();
    // 每个结点都遍历
    for (let i = 0; i < 26; i++) {
      let pc: AcNode = p.children[i];
      // 空结点 跳过
      if (pc === null) {
        continue;
      }
      // root结点 指向自己
      if (p === root) {
        p.fail = root;
      } else {
        let q: AcNode | null = p.fail;
        while (q !== null) {
          let qc: AcNode | null = q.children[pc.data.charCodeAt(0) - "a".charCodeAt(0)];
          if (qc !== null) {
            pc.fail = qc;
            break;
          }
          q = q.fail;
        }
        if (q === null) {
          pc.fail = root;
        }
      }
      queue.push(pc);
    }
  }
}

function match(text: string, root: AcNode): void {
  let n: number = text.length;
  let p: AcNode = root;
  for (let i = 0; i < n; i++) {
    let idx = text[i].charCodeAt(0) - 'a'.charCodeAt(0);
    while (p.children[idx] === null && p !== root) {
      p = p.fail; //失败指针发挥作用
    }
    p = p.children[idx];
    if (p === null) {
      p = root;
    }
    let temp: AcNode = p;
    while (temp !== root) {
      if (temp.isEndingChar === true) {
        let pos = i - temp.length + 1;
        console.log("匹配起始下标" + pos + "; 长度" + temp.length);
      }
      temp = temp.fail;
    }
  }
}