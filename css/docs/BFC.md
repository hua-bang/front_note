### BFC(Block Formattiing Context) 块级格式化上下文

`BFC` 全称：`Block Formatting Context`， 名为 "块级格式化上下文"。

`BFC`是一个完全独立的空间，让空间的子元素不会影响到外面的布局。

#### 如何触发BFC

简单列举触发BFC使用的CSS属性

- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex

#### BFC的规则

- BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- `BFC`就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个`BFC`的两个相邻的标签外边距会发生重叠
- 计算`BFC`的高度时，浮动元素也参与计算

