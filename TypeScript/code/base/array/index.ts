let arr: number[] = [1, 1, 2, 3, 5];
arr.push(6);

let arr2: Array<number> = [1, 2, 3, 4];

interface NumberArray {
  [propName: number]: number
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

let list: any[] = [];