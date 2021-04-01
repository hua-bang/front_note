### Keep-alive二三事

HTTP keep-alive也称为HTTP长连接。通过重用一个TCP连接发送/接收多个HTTP请求。来减少创建、关闭多个TCP连接的开销。

#### 什么是keep-alive

客户端和服务端一个约定，如何开启keep-alive，则服务端在返回response后不关闭TCP连接；同样，接受完响应报文后，客户端也不关闭连接，发送下一次http请求会重用该连接

HTTP/1.0协议

```JS
Connection: keep-alive
```

HTTP/1.1协议,默认开启

```js
Connection: close
```

用或不用

keep-alive技术创建的目的，使多个HTTP之间重用一个TCP连接，从而减少创建、关闭多个TCP连接的开销。

![img](https://lotabout.me/2019/Things-about-keepalive/keep-alive-demonstration.svg)

适用于：

- 客户端和服务器需要多次通信
-  TPS/QPS 很高的 REST 服务中，使用的是短链接的话，可能会发生占满的情况