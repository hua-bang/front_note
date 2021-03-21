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