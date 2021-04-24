### 基础知识

正则表达式是用于匹配字符串中字符组合的模式，在 JavaScript中，正则表达式也是对象。

- 正则表达式是在宿主环境下运行的，如`js/php/node.js` 等
- 本章讲解的知识在其他语言中知识也是可用的，会有些函数使用上的区别

### 对比分析

与普通函数操作字符串来比较，正则表达式可以写出更简洁、功能强大的代码。

下面使用获取字符串中的所有数字来比较函数与正则的差异。

```js
let hd = "houdunren2200hdcms9988";
let nums = [...hd].filter(a => !Number.isNaN(parseInt(a)));
console.log(nums.join(""));
```

使用正则表达式将简单得多

```js
let hd = "houdunren2200hdcms9988";
console.log(hd.match(/\d/g).join(""));
```

### 创建正则

- 字面量
  - /d/
- 对象
  - new RegExp();

### 用法：

- #### 选择符：

  - `|` 这个符号带表选择修释符，也就是 `|` 左右两侧有一个匹配到就可以。

    ```js
    const hd = "houdunren";
    console.log(/houdunren|hd/.test(hd));
    console.log(/(012|022)\-\d{4,6}/.test("012-34453"));
    ```

- #### 字符转义

  - 转义用于改变字符的含义，用来对某个字符有多种语义时的处理。

  - 假如有这样的场景，如果我们想通过正则查找`/`符号，但是 `/`在正则中有特殊的意义。如果写成`///`这会造成解析错误，所以要使用转义语法 `/\//`来匹配。

    ```js
    let url = "https://www";
    console.log(/https:\/\//.test(url));
    ```

- #### 字符边界

  使用字符边界符用于控制匹配内容的开始与结束约定。

  | 边界符 | 说明                         |
  | ------ | ---------------------------- |
  | ^      | 匹配字符串的开始             |
  | $      | 匹配字符串的结束，忽略换行符 |

  - ^的用法

    ```js
    console.log(/^www/.test("www.com"));
    ```

  - $的用法

    ```js
    console.log(/\.com$/.test("www.com"));
    ```

### 元子字符

元字符是正则表达式中的最小元素，只代表单一（一个）字符

#### 字符列表

| 元字符 | 说明                                                 | 示例          |
| ------ | ---------------------------------------------------- | ------------- |
| \d     | 匹配任意一个数字                                     | [0-9]         |
| \D     | 与除了数字以外的任何一个字符匹配                     | [^0-9]        |
| \w     | 与任意一个英文字母,数字或下划线匹配                  | [a-zA-Z_]     |
| \W     | 除了字母,数字或下划线外与任何字符匹配                | [^a-zA-Z_]    |
| \s     | 任意一个空白字符匹配，如空格，制表符`\t`，换行符`\n` | [\n\f\r\t\v]  |
| \S     | 除了空白符外任意一个字符匹配                         | [^\n\f\r\t\v] |
| .      | 匹配除换行符外的任意字符                             |               |

#### 所有字符

可以使用 `[\s\S]` 或 `[\d\D]` 来匹配所有字符

```js
let hd = `
  <span>
    houdunren
    hdcms
  </span>
`;
let res = hd.match(/<span>[\s\S]+<\/span>/);
console.log(res[0]);
```

### 模式修饰

正则表达式在执行时会按他们的默认执行方式进行，但有时候默认的处理方式总不能满足我们的需求，所以可以使用模式修正符更改默认方式。

| 修饰符 | 说明                                    |
| ------ | --------------------------------------- |
| i      | 不区分大小写字母的匹配                  |
| g      | 全局搜索所有匹配内容                    |
| m      | 视为多行                                |
| s      | 视为单行忽略换行符，使用.可匹配所有字符 |
| y      | 从regexp.lastIndex开始匹配              |
| u      | 正确处理四个字符的UTF-16编码            |

#### i

将所有houdunren.com统一为小写

```js
let hd = "houdunren.com HOUDUNREN.COM";
hd = hd.replace(/houdunren\.com/gi, "houdunren.com");
console.log(hd);
```

#### g

使用g修饰符可以全局操作内容

### 原子组

- 如果一次要匹配多个元子，可以通过元子组完成
- 原子组与原子表的差别在于原子组一次匹配多个元子，而原子表则是匹配任意一个字符
- 元字符组用 `()` 包裹

#### 基本使用

没有添加 `g` 模式修正符时只匹配到第一个，匹配到的信息包含以下数据

| 变量    | 说明             |
| ------- | ---------------- |
| 0       | 匹配到的完整内容 |
| 1,2.... | 匹配到的原子组   |
| index   | 原字符串中的位置 |
| input   | 原字符串         |
| groups  | 命名分组         |

在`match`中使用原子组匹配，会将每个组数据返回到结果中

- 0 为匹配到的完成内容
- 1/2 等 为原子级内容
- index 匹配的开始位置
- input 原始数据
- groups 组别名

```text
let hd = "houdunren.com";
console.log(hd.match(/houdun(ren)\.(com)/)); 
//["houdunren.com", "ren", "com", index: 0, input: "houdunren.com", groups: undefined]
```

下面使用原子组匹配标题元素

```text
let hd = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>hdcms</h2>
`;

console.table(hd.match(/<(h[1-6])[\s\S]*<\/\1>/g));
```

检测 `0~100` 的数值，使用 `parseInt` 将数值转为10进制

```text
console.log(/^(\d{1,2}|100)$/.test(parseInt(09, 10)));
```

### [#](https://houdunren.gitee.io/note/js/14 正则表达式.html#邮箱匹配)邮箱匹配

下面使用原子组匹配邮箱

```js
let hd = "2300071698@qq.com";
let reg = /^[\w\-]+@[\w\-]+\.(com|org|cn|cc|net)$/i;
console.dir(hd.match(reg));
```

如果邮箱是以下格式 `houdunren@hd.com.cn` 上面规则将无效，需要定义以下方式

```js
let hd = `admin@houdunren.com.cn`;
let reg = /^[\w-]+@([\w-]+\.)+(org|com|cc|cn)$/;
console.log(hd.match(reg));
```

### 引用分组

`\n` 在匹配时引用原子组， `$n` 指在替换时使用匹配的组数据。下面将标签替换为`p`标签

```js
let hd = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>hdcms</h2>
`;

let reg = /<(h[1-6])>([\s\S]*)<\/\1>/gi;
console.log(hd.replace(reg, `<p>$2</p>`));
```

如果只希望组参与匹配，便不希望返回到结果中使用 `(?:` 处理。下面是获取所有域名的示例

```js
let hd = `
  https://www.houdunren.com
  http://houdunwang.com
  https://hdcms.com
`;

let reg = /https?:\/\/((?:\w+\.)?\w+\.(?:com|org|cn))/gi;
while ((v = reg.exec(hd))) {
  console.dir(v);
}
```

### 分组别名

如果希望返回的组数据更清晰，可以为原子组编号，结果将保存在返回的 `groups`字段中

?<\tag\>

组别名使用 `?<>` 形式定义，下面将标签替换为`p`标签

```text
let hd = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>hdcms</h2>
`;
let reg = /<(?<tag>h[1-6])>(?<con>[\s\S]*)<\/\1>/gi;
console.log(hd.replace(reg, `<p>$<con></p>`));
```

获取链接与网站名称组成数组集合

```html
<body>
  <a href="https://www.houdunren.com">后盾人</a>
  <a href="https://www.hdcms.com">hdcms</a>
  <a href="https://www.sina.com.cn">新浪</a>
</body>

<script>
  let body = document.body.innerHTML;
  let reg = /<a\s*.+?(?<link>https?:\/\/(\w+\.)+(com|org|cc|//m,.//.,mm.,     cn)).*>(?<title>.+)<\/a>/gi;
  const links = [];
  for (const iterator of body.matchAll(reg)) {
    links.push(iterator["groups"]);
  }
  console.log(links);
</script>
```

### 重复匹配

#### 基本使用

如果要重复匹配一些内容时我们要使用重复匹配修饰符，包括以下几种。

| 符号   | 说明            |
| ------ | --------------- |
| *      | 重复0次或多次   |
| +      | 重复1次或多次   |
| ?      | 重复0次或一次   |
| {n}    | 重复n次         |
| {n, }  | 重复n次到无数次 |
| {n, m} | 重复n次到m次    |

默认情况下重复选项对单个字符进行重复匹配，即不是贪婪匹配

```js
let hd = "hdddd";
console.log(hd.match(/hd+/i)); //hddd
```

使用原子组后则对整个组重复匹配

```js
let hd = "hdddd";
console.log(hd.match(/(hd)+/i)); //hd
```

下面是验证坐机号的正则

```js
let hd = "010-12345678";
console.log(/0\d{2,3}-\d{7,8}/.exec(hd));
```

验证用户名只能为3~8位的字母或数字，并以字母开始

```js
<body>
  <input type="text" name="username" />
</body>
<script>
  let input = document.querySelector(`[name="username"]`);
  input.addEventListener("keyup", e => {
    const value = e.target.value;
    let state = /^[a-z][\w]{2,7}$/i.test(value);
    console.log(
      state ? "正确！" : "用户名只能为3~8位的字母或数字，并以字母开始"
    );
  });
</script>
```

验证密码必须包含大写字母并在5~10位之间

```js
<body>
<input type="text" name="password" />
</body>
<script>
let input = document.querySelector(`[name="password"]`);
input.addEventListener("keyup", e => {
  const value = e.target.value.trim();
  const regs = [/^[a-zA-Z0-9]{5,10}$/, /[A-Z]/];
  let state = regs.every(v => v.test(value));
  console.log(state ? "正确！" : "密码必须包含大写字母并在5~10位之间");
});
</script>
```

#### 禁止贪婪

正则表达式在进行重复匹配时，默认是贪婪匹配模式，也就是说会尽量匹配更多内容，但是有的时候我们并不希望他匹配更多内容，这时可以通过?进行修饰来禁止重复匹配

| 使用   | 说明                          |
| ------ | ----------------------------- |
| *?     | 重复任意次，但尽可能少重复    |
| +?     | 重复1次或多次，但尽可能少重复 |
| ??     | 重复0次或1次，但尽可能少重复  |
| {n,m}? | 重复n次到m次，但尽可能少重复  |
| {n, }? | 重复n次到多次，但尽可能少重复 |

下面是禁止贪婪的语法例子

```js
let str = "aaa";
console.log(str.match(/a+/)); //aaa
console.log(str.match(/a+?/)); //a
console.log(str.match(/a{2,3}?/)); //aa
console.log(str.match(/a{2,}?/)); //aa
```

将所有span更换为`h4` 并描红，并在内容前加上 `后盾人-`

```js
<body>
  <main>
    <span>houdunwang</span>
    <span>hdcms.com</span>
    <span>houdunren.com</span>
  </main>
</body>
<script>
  const main = document.querySelector("main");
  const reg = /<span>([\s\S]+?)<\/span>/gi;
  main.innerHTML = main.innerHTML.replace(reg, (v, p1) => {
    console.log(p1);
    return `<h4 style="color:red">后盾人-${p1}</h4>`;
  });
</script>
```

下面是使用禁止贪婪查找页面中的标题元素

```js
<body>
  <h1>
    houdunren.com
  </h1>
  <h2>hdcms.com</h2>
  <h3></H3>
  <H1></H1>
</body>

<script>
  let body = document.body.innerHTML;
  let reg = /<(h[1-6])>[\s\S]*?<\/\1>/gi;
  console.table(body.match(reg));
</script>
```

### 全局匹配

#### 问题分析

下面是使用`match` 全局获取页面中标签内容，但并不会返回匹配细节

```html
<body>
  <h1>houdunren.com</h1>
  <h2>hdcms.com</h2>
  <h1>后盾人</h1>
</body>

<script>
  function elem(tag) {
    const reg = new RegExp("<(" + tag + ")>.+?<\.\\1>", "g");
    return document.body.innerHTML.match(reg);
  }
  console.table(elem("h1"));
</script>
```

#### matchAll

在新浏览器中支持使用 `matchAll` 操作，并返回迭代对象

> 需要添加 `g` 修饰符

```js
let str = "houdunren";
let reg = /[a-z]/ig;
for (const iterator of str.matchAll(reg)) {
  console.log(iterator);
}
```

在原型定义 `matchAll`方法，用于在旧浏览器中工作，不需要添加`g` 模式运行

```js
String.prototype.matchAll = function(reg) {
  let res = this.match(reg);
  if (res) {
    let str = this.replace(res[0], "^".repeat(res[0].length));
    let match = str.matchAll(reg) || [];
    return [res, ...match];
  }
};
let str = "houdunren";
console.dir(str.matchAll(/(U)/i));
```

#### exec

使用 `g` 模式修正符并结合 `exec` 循环操作可以获取结果和匹配细节

```html
<body>
  <h1>houdunren.com</h1>
  <h2>hdcms.com</h2>
  <h1>后盾人</h1>
</body>
<script>
  function search(string, reg) {
    const matchs = [];
    while ((data = reg.exec( string))) {
      matchs.push(data);
    }
    return matchs;
  }
  console.log(search(document.body.innerHTML, /<(h[1-6])>[\s\S]+?<\/\1>/gi));
</script>
```

使用上面定义的函数来检索字符串中的网址

```js
let hd = `https://hdcms.com  
https://www.sina.com.cn
https://www.houdunren.com`;

let res = search(hd, /https?:\/\/(\w+\.)?(\w+\.)+(com|cn)/gi);
console.dir(res);
```

