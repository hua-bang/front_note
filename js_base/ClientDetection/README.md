# 客户端检测
    + 能力检测
        + 安全能力检测
            ```js
            function isSortable(obj) {
                return typeof object.sort === "function"
            }
            ```
        + 基于能力检测进行游览器分析
            + 检测特性
            + 检测游览器
            + 能力检测的局限
    + 用户代理检测 userAgent
        + 分析
            + window.navigator.userAgent
            + 伪造用户代理
                + window.navigator.__defineGetter__('userAgent',() => "foobar")
            + 分析游览器
                + 可借助第三方库
    + 软件与硬件的检测
        + 识别游览器和操作系统
            + navigator.oscpu
            + navigator.vendor
            + navigator.platform
        + 游览器元数据

