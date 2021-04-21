let hd = "test 2 345";
console.log(hd.match(/\d{2}/g));

let str = `张三: 020-1345351351,李四: 025-1541553121`;

// 匹配手机号码
console.log(str.match(/\d{3}-\d{10}/g));

// 匹配用户名
console.log(str.match(/[^:\d-,]+/g));

// 匹配非数字
console.log(/\D/.test(2019));

// 匹配字母数字下划线
console.log(hd.match(/\W/g));

// 除了字母 数字 下划线和任意字符匹配
console.log(/\W/.test("@"));

// 匹配任意一个空白字符串
console.log(/\s/.test(" "))
console.log(/\s/.test("\n"));

// 匹配非空格
console.log(hd.match(/\S/g));

// 匹配点需要转义
console.log(/houdunren\.com/.test("houdunren@com"))

const url = `
 https://www.houdunren.com
 hdcms.com
`
// /s为单行模式（忽略换行）时，.可以匹配所有
console.log(url.match(/.+/s)[0])
console.log(url.match(/.+/)[0])

let res = `
  <span>
    houdunren
    hdcms
    <span>123</span>
  </span>
`.match(/<span>.*<\/span>/s);
console.log(res[0]);