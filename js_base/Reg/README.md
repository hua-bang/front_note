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
  let reg = /<a\s*.+?(?<link>https?:\/\/(\w+\.)+(com|org|cc|cn)).*>(?<title>.+)<\/a>/gi;
  const links = [];
  for (const iterator of body.matchAll(reg)) {
    links.push(iterator["groups"]);
  }
  console.log(links);
</script>
```

