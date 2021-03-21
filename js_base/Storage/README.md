#### 客户端存储

客户端存储用户信息需求随之出现

#### **Cookie**

- 最初用于客户端存储会话信息

  - 响应HTTP请求 会包含一个Set-Cookie
  - 之后请求回去会带着响应的Cookie信息

- **限制**

  - cookie时与特定域绑定的，保证cookie只对认可的接收者开发，不被其他域访问。
  - cookie在有浏览器存放大小有限
  - 当超过单个条件限制，会删除cookie腾给新的cookie

- ##### cookie构成

  - **名称**：cookie不区分大小写（url编码）

  - **值**：存储在cookie字符串值（url编码）

  - **域**：cookie有效的域。发送到这个域的请求会包含对应的cookie，可能包含子域，也可以不包含

  - **路径**：URL下包含这个路径才会发送 指定为https://xxx.com/books 那么访问 https://xxx.com就不会发送cookie

  - **过期时间**：表示删除cookie时间戳，默认下关闭会话即删除，但设置过期时间则会保留

  - **安全标志**：著有ssl安全连接才会发送cookie ，否则不会

    这些参数在响应中的Set-Cookie头部用分号隔开，如：

    ```js
    Set-Cookie: name=value;expires=Mon;domain=.wrox.com;secure
    ```

    请求的时候这些cookie并不会全部发送到游览器，实际发送的只有cookie的名/值对。

- ##### js中的cookie

  - js操作麻烦，因为只有bom的接口

- **子Cookie**

  - 理解：

    ```js
    name=name1=value1&name2=value2
    ```

  - 读取，保存，删除

- ##### 注意事项

  - js无法取得HTTP-only的值
  - 适量保存cookie
  - cookie存放在游览器，较为透明，故不要存放敏感信息。

### Web Storage

- **web storage解决的问题是请求响应频繁发送使用cookie的问题**

- **web storage最新是第2版**
  - 提供在cookie之外的存储会话数据的途径
  - 提供跨会话持久化存储大量数据的机制

- 定义了两个对象 localStorage和sessionStorage
  - localStorage永久存储机制
  - sessionStorage是跨会话存储机制

- #### storage类型

  - Store类型保存名\值数据，直到存储空间上限。

  - api

    - clear() 删除所有值 不在Firefox实现
    - getItem(name)得到name的值
    - key(index)取得给定数值位置的名称
    - removeItem(name)删除给定name的名/键对
    - setItem(name, value)设置值

    **注意：**只能存放字符串，非字符串对象会进行数据类型转换

- **sessionStorage对象**

  - sessionStorage只存储会话数据，意味存储到游览器关闭。

  - 页面刷新不影响

  - 不适合多页应用程序

  - 方法的例子：

    - 写入
      - sessionStorage.setItem("name","123");
      - sessionStorage.book = "book";
    - 取值
      - sessionStorage.getItem("name");
      - sessionStorage.book
    - 删除
      - delete sessionStorage.name
      - sessionStorage.removeItem("name");

  - **注意**：

    通过点击链接（或者用了 `window.open`）打开的新标签页之间是属于同一个 session 的，但新开一个标签页总是会初始化一个新的 session，即使网站是一样的，它们也不属于同一个 session。

- **localStorage对象**

  - 要访问同一个localStorage对象，需要页面来自同一域（子域不可以），相同端口使用相同协议。
  - 方法：
    - 写入：
      - localStorage.setItem(name, value);
      - localStorage.name = value;
    - 读取
      - localStorage.getItem(name)
      - localStorage.name
  - 只能通过js删除或者手动清除游览器缓存。

- **存储对象**

  - 每当Storage对象，都会触发storage时间。

  - event中有4个参数

    - domain 变化的域
    - key 设置或删除的键
    - newValue 新值
    - oldValue 旧值

  - 代码：

    ```js
    window.addEventListener("storage", ({domain,key,newValue,oldValue}) => {
        
    })
    ```

- 限制：会有大小限制

#### IndexedDB

- Indexed Database API 简称IndexedDB,
- 方便存储获取 查询 搜索
- 完全异步的 onerror onsuccess
- **数据库**
  - 类似nosql
  - indexedDB.open()打开数据库
- **对象存储**
  - 触发upgradeneeded事件
    - 数据库不存在，open打开新数据库，触发upgradeneeded
    - 数据库存在，升级版本号，触发upgradeneeded