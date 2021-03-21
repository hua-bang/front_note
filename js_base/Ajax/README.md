### 网络请求与远程资源

- **认识**
  - Ajax (Asynchronous Javascript + XML) 异步js+xml
    - 名称虽然包含XML,但与数据类型没有关系。
  - XHR XMLHttpRequest
  - Fetch Api
    - 支持promise 和 服务线程。

- **XMLHttpRequest对象**

  - **初始化**

    ```js
    let xhr = new XMLHttpRequest();
    ```

  - **使用**

    - **open(method, url, isAsync);**

      三个参数：method 请求方式 url 请求连接 isAsync 是否异步请求

      此时并不会发送请求，而是做好请求准备。

      只能访问同源URL（域名相同，端口相同， 协议相同）

      ```js
      xhr.open("get","https://www.baidu.com",true);	//true为同步
      ```

    - **send(data)**

      一个参数，作为请求体发送的数据，如果不需要的话则为null

      请求成功后xhr对象的以下属性会填充数据

      - responseText: 响应体返回的文本
      - responseXML:响应数据的XML DOM文档
      - status 响应的http状态 状态码
      - statusText 响应的http状态描述

      主要看status 和 responseText

    - **readyState表明响应处于的阶段**（onreadystatechange会有readyState改变触发）

      - 0 未初始化(Uninitialized) 未调用open方法
      - 1 已打开(Open) 调用open方法 尚未调用send
      - 2 已经发送(Sent) 调用send方法， 还没收到响应
      - 3 接收中(Receiving)  收到部分响应
      - 4 完成(Complete) 收到响应 可以使用

    - **abort的方法** 

      - 用途：收到响应前取消异步请求
      - 注意：调用abort会组织访问这个对象上响应的属性，不推荐使用abort再重用该对象，应该进行垃圾回收。

  - **HTTP头部**

    - 每次http请求和响应都会携带一些头部字段。xhr可以通过一些方法暴露出来头部字段。
    - **setRequestHeader**
      - setRequestHeader(key, value)
      - 必须在open之后，send之前
    - **getResponseHeader**
      - 用法：getResponseHeader(headerName)
    - **getAllResponseHeaders**
      - 用途：得到响应头的所有信息

  - ##### GET请求

    - 最常见的请求。如有参数，则添加到url后面。
    - 注意，添加参数的时候需要使用encodeURIComponent()方法

  - **POST请求**

    - 注意send发送时候的请求体
    - 注意请求头的Content-type
    - 序列化请求参数
    - post请求比get请求更占资源，访问相同数据，get请求比post请求快2倍。

  - **XMLHttpRequest Level 2**

    - FormData类型

      ```js
      let data = new FormData();
      data.append(key, value);
      let data = new FormData(document.form[0]);
      ```

      - 不需要显示设置头部
      - 会自动配置相应的头部。

    - 超时（timout）：

      - timeout超时
      - 触发事件ontimeout
      - 超时之后访问status会出错。

    - overrideMimeType方法

      - 响应返回的MIME类型决定XHR对象如何处理响应

  #### 进度事件（Progress Event）

  - **实现进度条**
  - **六个事件**
    - loadstart 开始接收到第一个字节就触发
    - progress 在接收响应期间反复触发
    - error 请求出错前触发
    - abort 调用abort触发事件
    - load 成功接收完响应触发
    - loadend 通信完成，error，abort，load后触发
  - **load事件**
    - onload替代onreadystate事件
    - 里面的event.target指向xhr对象（但并非所有游览器都兼容）
  - **progress**(进度条)
    - onprogress(event)
      - event中target指向xhr对象，其中有额外三个字段
        - lengthComputable
          - 布尔值，信息是否可用
        - position
          - 接收到的字节数
        - totalSize
          - 响应Content-length头部定义总字节数

  #### 跨域资源共享

  - **认识**
    - 通过XHR进行Ajax通信的主要限制是跨域安全策略
    - 跨域资源共享(CORS, Cross-Origin Resource Sharing)
    - 没有自定义 简单的请求，会在请求发送时加一个额外的头部Origin(协议，域名，端口)。
    - 跨域
      - 不能自定义头部
      - 不能发送和接收Cookie
      - getAllResponseHeaders得到空字符串
  - **预检请求**
    - CORS有一个预检请求，涉及高级选项请求前，会先发送“预检”请求。使用OPTIONS方法并包含下方头部
      - Origin: 与简单请求相同。
      - Access-Control-Request-Method:请求希望使用的方法
      - Access-Control-Request-Headers:使用逗号分隔的自定义头部列表
    - 预检请求发送后，结果会按响应指定的时间缓存一段时间。只有第一次发送这种类型请求时才会发送一次额外的http请求
  - **凭证请求**
    - withCredentials
    - Access-Control-Allow-Credentials:true

  #### **替换行跨源技术**

  - **图片探测**

    使用image进行跨域通信，任何页面可以跨域加载图片不受限制

    可以发送请求，但无法获得响应内容（单向通信）

  - **Jsonp**

    - **jsonp(json with padding)**

    - **原理**：使用动态创建script元素，并指定src属性是西安的

    - **格式**

      ```js
      callback({"name":"hug"})
      ```

    - **代码**

      ```js
      function handleResponse(response) {
          console.log(response);
      }
      
      let script = document.createElement("script");
      script.src = "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws&callback=handleResponse";
      document.body.append(script);
      ```

    - **优点**：简单易用

    - **缺点**：

      - 可能会涉及安全问题
      - 无法确定jsonp是否请求失败。

  ### Fetch Api

  fetch能执行XMLHttpRequest的方法，且更容易使用。必须是异步。

  - ##### 基本用法

    - **fetch是暴露在全局作用域的，会给URL发送请求。**

    - **分派请求**

      - fetch()只有一个必需参数，URL，这个方法返回一个promise

        ```js
        fetch("/bar").then(res => {
            console.log(res);
        })
        ```

    - **读取响应**

      - 这时候需要用到text()方法，该方法返回Promise

        ```js
        fetch("/bar").then(response => {
            response.text().then(data => {
                console.log(data)
            })
        })
        
        fetch("bar")
            .then(res => res.text())
            .then(data => {
            	console.log(data)
        })
        ```

    - **处理状态码和请求失败**

      - status(状态码) statusText(状态文本)
      - 重定向时，默认会跟随着重定向，状态码仍是200
      - 只要服务器有响应 就算成功，fetch期约都会解决  未响应的时候才会导致期约被拒绝。
      - 违反CORS，无网络链接，HTTPS曹佩或游览器、网络策略等问题都会导致拒绝521

    - **自定义选项**

      - fetch第一个参数是必须的，若只用第一个参数，会发送get请求，第二个参数为init对象
        - body
        - cache
        - credentials
        - headers
        - integrity
        - keepalive
        - method
        - mode
        - redirect
        - referrer
        - referrerPolicy
        - signal

  - ##### 常见Fetch的请求模式

    用init对象参数，可以配置fetch在请求体中发送的各种形式的数据

    - **JSON数据**

      ```js
      let payload = JSON.stringify({
          foo: "bar"
      });
      
      let jsonHeaders = new Headers({
          "Content-Type": "application/json"
      });
      
      fetch("http://127.0.0.1/api/post.php", {
          method: "post",
          body: payload,
          headers: jsonHeaders
      })
      .then(res => res.text()).then(res => {
          console.log(res);
      })
      ```

    - **请求体中发送数据**

      ```js
      payload = "foo=bar&baz=qux";
      let paramHeaders = new Headers({
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"  
      })
      
      fetch("http://127.0.0.1/api/post.php", {
          method: "post",
          body: payload,
          headers: paramHeaders
      })
      .then(res => res.text()).then(res => {
          console.log(res);
      })
      ```

    - **发送文件**

      - FormData

        ```js
        let formData = new FormData();
        formData.append();
        fetch(url, {
            method: "post",
            body: formData
        })
        ```

    - **加载Blob文件**

      提供响应blob类型的响应，达到文件对象，然后可以使用blob()将其返回。

      ```js
      let imgUrl = "./static/demo.jpg";
      setTimeout(() => {
          fetch(imgUrl)
          .then(res => res.blob())
          .then(blob => {
              let url = URL.createObjectURL(blob);
              insertImg(url, (src) => {
                  console.log(`loaded success`);
                  console.log(src);
              })
          })
      },1000)
      
      function insertImg(src, callback = () => {}) {
          if(!src) {
              throw new Error("need image");
          }
          let img = document.createElement("img");
          img.src = src;
          console.log(src);
          console.log(typeof src);
          document.body.appendChild(img);
          img.onload = () => {
              callback(src);
          }
      }
      ```

    - **发送跨域请求**

      从不同的源请求资源，包含Cors才能保证响应，没有头部，跨域请求失败并错误。

      no-cors请求，响应type值为opaque,无法得到响应内容，适用探测请求或响应缓存

    - **中断请求**（少用）

      直接通过AbortController/AbortSignal中断请求

      ```js
      let abortController = new AbortController();
      fetch(url, {signal:abortController.signal}).then(res => {}, err => {})
      setTimeout(() => {
          abortController.abort()
      },2000);
      ```

  - **Headers对象**

    - Headers对象是所有外发请求和入站响应头部的容器
    - Request.prototype.headers Response.prototype.headers
    - Headers和Map相似
      - get
      - set
      - has
      - delete
    - Headers独有的特性
      - 可以用对象进行初始化
      - append添加字段
    - 头部护卫

  - **Request对象**

    - 创建Request对象

      ```js
      let r = new Request("http://127.0.0.1/api/index.php");
      console.log(r);
      ```

      Request也接受第二个参数 一个init对象，跟fetch的init对象一样，会有默认值

    - 克隆Request对象

      Fetch提供创建构造Request对象的副本，使用Request构造函数，和使用clone方法

      - Request构造函数

        ```js
        let r1 = new Request("https://www.baidu.com");
        
        let r2 = new Request(r1);
        
        let r3 = new Request(r1, {method:"post"});	//此时的r1.bodyUsed 为true
        ```

      - clone方法

        ```js
        let r1 = new Request("https://www.baidu.com");
        let r2 = r1.clone();	//此时r1.bodyUsed不会被标记
        ```

    - 在fetch中使用Request对象

      fetch第一个参数可以传入Request对象，而非url

      ```js
      let r = new Request(url);
      fetch(r, {});
      ```

      fetch不能用已经用过的请求体进行请求

      如果希望多次第哦啊用fetch，则可以使用clone

      ```js
      let r = new Request(url);
      fetch(r.clone());
      fetch(r.clone());
      ```

  - **Response对象**

    - **创建Response对象**

      - 可以通过构造函数初始化且不需要参数，均为默认值。不代表实际的HTTP响应。
      - 参数body，init
        - body 可选 相当于fetch中init参数中的body属性
        - init 可选
          - headers
          - status
          - statusText
      - 大多情况下，产生Response对象主要调用fetch方法，返回一个最后会解决为Response对象的期约

    - **读取响应状态信息**

      - headers
      - ok
      - redirected
      - status
      - statusText
      - type
      - url

    - **克隆Response对象**

      - 主要用的是clone方法，创建一模一样的副本

      - 不能克隆已经用过的response

      - 响应体只能读取一次

      - 代码：

        ```js
        let r1 = new Response("foorbar");
        let r2 = r1.clone();
        ```

  - **Request、Response、Body混入**

    - **Body混入为Request和Response提供了body，bodyUsed和一组方法**
    - **Request、Response两个原因**
      - 有效载荷大小会导致网络延迟
      - 流APi在有效载荷方面是有优势的。
    - **Body.text()**
      - 返回promise，解决为将缓冲区转存得到UTF8格式字符串
      - 在Response上使用了Body.text()
    - **Body.json()**
      - 返回promise，解决为将缓存区转存得到json
      - 在Response上使用了Body.json();
    - **Body.formData();**
      - 游览器通过FormData对象序列化、反序列化为主体
      - 返回promise，解决为将缓存区转存得到FormData实例
      - 在Request上使用了Body.formData();
    - **Body.arrayBuffer();**
      - 在Request，Response上使用了Body.formData();
    - **Body.blob()**
      - 返回promise，解决为将缓冲区转存得到blob
      - 在Request，Response上使用了Body.blob();
    - **一次性流**
      - Body中混入是构建在ReadableSteam上，主体流只能使用一次，意味所有的主体混入方法只能调用一次。
      - 在读取流的过程中，这些方法调用时会被加锁，阻止其他访问器访问
      - bodyUsed表示ReadableStream是否已经摄受，意思时读取器是否已经在流上加了锁
    - **使用ReadableStream主体**

  - ##### Beacon API

    - 由于一般在unload时间时候发送请求，可能会被游览器将事件销毁

    - Beacon Api

    - 使用

      ```js
      navigator.sendBeacon(url,'{}');
      ```

    - 特性：

      - sendBeacon随时都能用
      - 调用该方法，游览器会把请求添加到一个内部请求队列，游览器主动发送
      - 页面关闭下也会发送
      - 状态码，超时，响应对于游览器来说均是透明的
      - 可以携带cookies

  - **web socket**

    - 长连接实现服务器全双工，双向的通信。

    - 协议

      - ws，wss

    - Api

      - 初始化

        ```js
        let socket = new WebSocket(url);
        ```

      - 关闭

        ```js
        socket.close();
        ```

      - 发送接收信息

        ```js
        socket.send(data);
        socket.onmessage = (event) => {
            let data = event.data;
        }
        ```

        
