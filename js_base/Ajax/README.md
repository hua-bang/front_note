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

