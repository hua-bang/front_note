/**
 * @author hug
 * @date 2021/3/6 8:21
 */
// 声明且必须初始化
const NAME = "hug";
console.log(NAME);

// 不可以修改变量指向的地址，但可以修改变量指向地址的变量的值
const OBJ = {};
OBJ.name = "hua";
// OBJ = {};   //报错
console.log(OBJ);
