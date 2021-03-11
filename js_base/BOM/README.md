+ BOM (Browser Object Model) 使用js开发web的核心
    + window对象（BOM的核心）
        + 身份 Global对象 js接口
        + Global作用域
            + var申明的变量都会变成window属性和方法
                + let const 不会发生这样的效果
                + 可能会覆盖window的属性或方法
        + 窗口关系
        + 窗口位置与像素比
        + 窗口大小
        + 视口位置
        + 导航与打开新窗口
            + window.open()
            + 弹出窗口
            + 安全限制
            + 弹窗屏蔽程序
        + 定时器
            + setTimeout
                + setTimeout(fn, time, ...args);
                + clearTimeout
            + serInterval
                + setInterval(fn, time, ...args);
                + clearInterval(id)
        + 系统对话框
            + alert
            + confirm
                + ok true
                + cancel false
            + prompt
                + ok input value
                + cancel null
            + find
                + ctrl + f
            + print
                + ctrl + p
    + location对象
        + 地址栏字符串查询
            + 编写函数
            + URLSearchParams
        + 操作地址
            + location.assign
            + location的属性除了hash之外，修改一个属性，就会导致页面重新加载url
            + 前进 后退不会改变hash值
            + replace不能记录到历史记录
            + location.reload
                + location.reload() 重新加载 可能是从缓存加载
                + location,reload(true) 从服务器端加载
    + navigator对象
        + 标识客户端的标准
        + 检测插件(plugins) 数组 每个元素解构
            + name 插件名称
            + description 插件介绍
            + filename 插件文件名
            + length 当前插件处理的MIME数量
            + IE有专门的ActiveXObject
            + refresh 刷新plugins属性 传入true的话，所有包含插件的页面都会重新渲染
        + 注册处理程序
    + screen对象
    + history对象
        + 导航
            + go
            + back
            + forward
            + length
        + 历史状态管理
            + hashchange 会在散列值变化时触发

