/**
 * 测试函数
 * @param name 名字
 * @param age 年龄
 * @param a 测试
 * @returns string
 */
function sayHi (name: string, age: number, a: boolean): string {
  console.log(`hi ${name}`);
  return `hi, name`;
}

/**
 * 类测试
 */
class A {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * 方法测试
   */
  sayHi(): string {
    return `hi, I'm ${this.name}`;
  }
}