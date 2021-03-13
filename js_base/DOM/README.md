# DOM
    +文档对象模型(Document Object Model)
    + 节点层级 document是文档的根节点 唯一子节点是html元素 文档元素 DOM一个有12种节点类型
        + Node类型
            + 所有的节点类型都继承Node类型
            + 每个节点都有nodeType,表示节点的类型。节点类型有由定义在Node类型上的12个数值常量表示
                + 元素节点            　　Node.ELEMENT_NODE(1)
                + 属性节点            　　Node.ATTRIBUTE_NODE(2)
                + 文本节点            　　Node.TEXT_NODE(3)
                + CDATA节点             Node.CDATA_SECTION_NODE(4)
                + 实体引用名称节点    　　 Node.ENTRY_REFERENCE_NODE(5)
                + 实体名称节点        　　Node.ENTITY_NODE(6)
                + 处理指令节点        　　Node.PROCESSING_INSTRUCTION_NODE(7)
                + 注释节点            　 Node.COMMENT_NODE(8)
                + 文档节点            　 Node.DOCUMENT_NODE(9)
                + 文档类型节点        　　Node.DOCUMENT_TYPE_NODE(10)
                + 文档片段节点        　　Node.DOCUMENT_FRAGMENT_NODE(11)
                + DTD声明节点            Node.NOTATION_NODE(12)
            + nodeName 与 nodeValue
                + 两个属性的值完全取决于节点类型
                + 对元素而言nodeName始终等于元素的标签名，nodeValue始终为null。
            + 节点关系
                + 家族关系 父子关系
                + parentNode
                + childNodes
                + previousSibling (可理解为上一个兄弟)
                + nextSibling (可理解为下一个兄弟)
                + hasChildNodes(判断有没有子节点)
            + 操纵节点
                + appendChild(node) 在调用节点前使用 用于在该节点的childNodes列表最后添加一个node.
                + 一个节点 不会在文档同时出现在两个或更多地方 调用appendChild会造成node移动
                + insertBefore(node, beforeNode);
                + replaceChild(node, needReplaceNode);
                + removeChild(node);
            + 其他方法
                + cloneNode(boolean)    //false 制复制该方法的节点 true 复制该节点以及其子节点结构
                    + 只复制html属性，可选复制子节点
                    + 不会复制添加在上面的javaScript属性
                + normalize方法
                    + 空文本节点 删除
                    + 同胞节点相邻则合并
        + Document类型
            + 文档子节点
                + let html = document.documentElement;
                + let body = document.body;
            + 文档信息
                + let title = document.title;
                + let url = document.URL;
                + let domain = document.domain;
                + let referrer = document.referrer;
            + 定位元素
                + HTMLCollection 中nameItem() 根据名字找到节点 images["myImage"]; 也是根据名字找
                + getElementById();
                + getElementByTagName() HTML不分大小写 但XML分;
            + 特殊集合
            + DOM兼容性检测
                + document.implementation
            + 文档写入
                + write
                + writeln
                + open
                + close
        + Element类型
            + 认识
                + 类型为1
                + nodeName为标签名
                + parentNode是Document或Element对象
                + 在html中，元素始终为大写
            + HTML元素
            + 取得属性
                + 取得属性 getAttribute
                + 设置属性 setAttribute
                + 删除属性 removeAttribute
                + attributes
            + 设置属性
            + attributes属性
            + 创建属性
                + createElement
            + 元素后代
        + Text类型
            + 类型等于3
            + 创建文本节点
                + document.createTextNode
                + 规范化文本节点
                    + element.normalize()
                    + element.splitText(index)
                        + 分成两个文本节点 第一个保留原来位置到偏移位置 第二个返回剩下
        + Comment类型 8
            + 创建注释
                + createComment
        + CDATASection类型 4
            + 创建
                + createCDataSection
        + DocumentType类型 10
        + DocumentFragment类型 11
            + 创建
                + createDocumentFragment
        + Attr类型 2
            + 创建
                + createAttribute()
            + 使用
                + element.setAttributeNode(attr)
    + DOM编程
        + 动态脚本(loadScript)
        + 动态样式(loadStyle)
        + 操作表格
        + 使用NodeList
            + 注意元素是实时的
            + 限制操作NodeList数目
    + MutationObserver接口
        + 基本用法
            + observe()
            + 回调与MutationRecord
            + disconnect()
            + 复用MutationObserver
            + 重用MutationObserver
                + 先断开
                + 再观察
        + MutationObserverInit与观察范围
            + 观察属性
            + 观察字符数据
            + 观察子节点
            + 观察子树
        + 异步回调与记录队列
+DOM扩展
    + Selectors API
        + querySelector()
            + 返回值 Node null
            + 可以在节点使用
        + querySelectorAll()
            + 返回值 NodeList
            + 可以在节点使用
        + matches()
            + 检测元素会不会被返回
    + 元素遍历
        + childElementCount()
        + firstElementChild()
        + lastElementChild()
        + previousElementSibling()
        + nextElementSibling()
    + HTML5
        + CSS类扩展
            + getElementByClassName()
            + classList
                + add
                + contains
                + remove
                + toggle
        + 焦点管理
            + document.activeElement    //获得当前焦点的节点
        + HTMLDocument扩展
            + readyState  loading/complete
            + compatMode属性
            + head属性
        + 字符集属性
        + 自定义数据属性
            + 前缀 data-
            + dataSet访问数据
        + 插入标记
            + innerHTML属性
            + 旧的innerHTML
                + script style非受控
            + outerHTML
        + insertAdjacentHTML insertAdjacentText
            + beforeBegin
            + afterBegin
            + beforeEnd
            + afterEnd
        + 内存与性能问题
        + 跨站点脚本
        + scrollIntoView
            + alignToTop
                + true 窗口滚动后元素顶部与视口顶部对齐
                + false 窗口滚动后元素底部与视口对齐
            + scrollIntoViewOptions
                + behavior
                + block
                + inline
    + 专有扩展
        + children属性
        + contains()方法
        + compareDocumentPosition
        + 插入标记
            + innerHTML
            + outerHTML
            + innerText
            + outerText
    + 滚动
+ DOM2和DOM3
    + 遍历
        + NodeIterator
        + TreeWalker

