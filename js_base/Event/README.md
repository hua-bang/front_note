+ 事件
  + 事件流
    + 事件冒泡 从最具体的元素开始触发 到最不具体的元素
      + div -> body -> html -> document
    + 事件捕获 从最不具体的元素触发 到最具体的元素
      + document -> html -> body -> div
    + DOM事件流
      + 事件捕获 -> 到达目标 -> 冒泡阶段
  + 事件处理程序
    + click、load、mouseover 事件处理程序 事件处理以“on”开头
    + HTML事件处理程序
      + event 指的是event对象
      + this 指的是当前的对象
      + 时机问题
    + DOM0事件处理程序
      + 增加: btn.onClick = function(){};
      + 移除: btn.onClick = null;
      + 一个事件只能添加一个处理程序
    + DOM2事件处理程序
      + 增加: btn.addEventListener("event",() => {},boolean=false);
        + boolean为true表示在捕获阶段调用
        + boolean为false表示在冒泡阶段调用
      + 移除: btn.removeEventListener("event", callback, boolean=false);
        + boolean为true表示在捕获阶段调用
        + boolean为false表示在冒泡阶段调用
        + remove传的事件要和add时候的事件是同一个(引用相同);
    + IE事件处理程序(只在冒泡阶段)
      + attachEvent
        + 添加多个 反向触发
      + detachEvent
    + 跨游览器事件处理程序
  + 事件对象(event)
    + DOM事件对象
      + 注意currentTarget和target值的情况 不过this===event.currentTarget
      + preventDefault()阻止默认事件
        + cancelable属性会设置成ture
        + 连接跳转
        + 表单提交
      + stopPropagation()
        + 立即阻止事件流在DOM结构传播。
      + eventPhase
        + 1 捕获阶段
        + 2 事件处理程序在目标上调用
        + 3 冒泡阶段
    + IE事件对象
      + event window.event
      + 注意DOM0的声明和IE的attachEvent的this指向（故一般用event.srcElement）
      + returnValue 等同 preventDefault
        + returnValue = true;
      + cancelBubble 等同 stopPropagation
        + 不过cancelBubble = true 只会阻止冒泡
    + 跨游览器事件对象
  + 事件类型
    + 用户界面事件
      + DomActive
      + load
      + unload
      + abort 下载前终止下载触发
      + error
      + select
      + resize 窗口缩放
        + 这个可能会操作频繁
      + scroll 元素滑动触发
        + 这个可能会操作频繁
    + 焦点事件
      + blur 失去焦点
      + DOMFocusIn: 元素获得焦点触发 冒泡
      + DOMFocusOut 元素失去焦点触发
      + focus 元素获得焦点触发，这个事件不冒泡
      + focusin 元素获得焦点触发，冒泡
      + focusout 失去焦点触发
      + 一个元素转移到另一个元素
        + focusout -> focusin -> blur -> DomFocusOut -> focus -> DomFocusIn
    + 鼠标事件
      + click
      + dbclick
      + mousedown
      + mouseenter
      + mouseleave  离开整个元素
      + mousemove
      + mouseout    离开到外部 或子元素
      + mouseover   元素外部到元素内部
      + mouseup
      + 客户端坐标
        + 针对于客户端视口区域的x,y坐标
      + 页面坐标
      + 屏幕坐标
      + 修饰键(shift alt ctrl)
      + 相关元素
    + 滚轮事件
      + mousewheel
        + 向前 + 120
        + 向后 - 120
    + 输入事件
      + textInput
        + 只有插入新字符才会触发
    + 键盘事件
      + keydown 按下按键触发，持续按住持续触发
      + keypress 按下按键触发，持续按住重复触发
      + keyup 释放时 触发
      + 顺序
        + keydown -> keypress -> keyup
      + 键码
        + event.keyCode
      + 字符编码
        + event.charCode
      + 先检查有没有charCode 再看keyCode
      + DOM3的变化
        + key
          + 按下字符键，为文本字符
          + 非字符，为键名
        + char （ie不支持）
          + 按下字符键，为文本字符
          + 非字符，为null
        + keyIdentifier 以"U+0000"表示Unicode
    + 合成事件
      + 用于处理通常使用IME输入的复杂输入序列
      + compositionstart
      + compositionupdate
      + compositionend
    + 变化事件
    + HTML5事件
      + contextmenu
      + beforeunload
      + DOMContentLoaded dom结构加载后触发，无需等待图片的资源加载
      + readystatechange 
        + 不稳定
        + 不同元素的readyState值可能不一样
        + 无法确定load触发的前后顺序
        + pageShow pageHide (用的对象只能是window)
          + 往返缓存
          + 往返不会促发的load事件
          + pageShow 新页面还是往返页面都会被触发
          + pageHide 
          + event.persisted 检测释放时来自缓存
        + hashchange
          + 必须添加在window上
          + 检测散列值的变化
    + 设备事件
      + orientationchange
      + deviceorientation
      + devicemotion
    + 触摸手势事件
      + 触摸事件
        + touchstart
        + touchmove
        + touchend
        + touchcancel
      + 手势事件
        + gesturestart
        + gesturechange
        + gestureend
  + 内存与性能
    + 事件处理程序越多会影响页面整体性能
    + 事件委托（冒泡）
      + 事件委托利用冒泡，使用一个事件处理程序管理一种类型事件。
      + 优点：
        + document对象随时可用
        + 节省dom引用和时间
        + 减少内存开销，优化性能
    + 删除事件处理程序
      + 及时删除不用的事件处理程序
      + 无用事件处理程序可能会早场长驻内存而导致性能不佳
        + 事件处理程序不及时删除的话，会保存对dom元素的引用，导致该dom节点不会被垃圾回收机制正常清理
  + 模拟事件
    + DOM事件模拟
      + document.createEvent()
        + UIEvents
        + MouseEvents
        + HTMLEvents
        + 触发事件 dispatchEvent(element) 要触发事件的对象
      + 模拟鼠标事件
        + let event = document.createEvent("mouseEvents");
      + 模拟键盘事件
        + let event = document.createEvent("KeyboardEvents");
      + 模拟其他事件
        + let event = document.createEvent("HTMLEvents");
      + 自定义DOM事件
        + createEvent("CustomEvent");
        + event.initCustomEvent(type,bubbles,cancelable,detail);
    + IE事件模拟
      + 使用createEventObject()