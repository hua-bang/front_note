### 前端优化：DNS预解析提升页面速度

- 现象：前端访问不同域名外的域名文件可能会比较慢，出现请求延时的情况。

- 出现原因：

  - 对方网站的宽带或负载原因（少数）
  - 网速原因（也有一定可能）
  - DNS解析的速度原因

- 处理：

  - 预解析，在页面的header添加下方代码

  - ```html
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
    <link rel="dns-prefetch" href="http://nsclick.baidu.com" />
    <link rel="dns-prefetch" href="http://hm.baidu.com" />
    <link rel="dns-prefetch" href="http://eiv.baidu.com" />
    ```

- 游览器对网站第一次域名DNS解析查找过程如下

  - 游览器缓存->操作系统缓存->路由器缓存->ISP DNS缓存-->递归搜索

- 页面预解析实现：

  - 首先用meta信息告知游览器，做DNS预解析

    ```html
    <meta http-equiv="x-dns-prefetch-control" content="on"/>
    ```

  - 在header页面中使用link强制对DNS预解析

    ```html
    <link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
    ```

- 注：

  - dns-prefetch慎用，多页面的DNS预先解析会则增加DNS查询次数

