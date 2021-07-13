# CSS 常见布局方式

![本文思维导图，欢迎补充](https://user-gold-cdn.xitu.io/2017/8/21/395302ae7949d78570a6102e5ded1ff0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 前言

本文主要是介绍 flex 布局和 grid 布局，以及 CSS 常见的居中方式和两种经典的布局方式“圣杯布局”和“双飞翼布局”。想到哪写到哪，请各位见谅。

### 传统盒模型布局方式

我们的传统布局方式就是通过盒模型，使用 `display` 属性（文档流布局） + `position` 属性（定位布局） + `float`属性（浮动布局）。

#### 文档流布局

这是最基本的布局方式，就是按照文档的顺序一个一个显示出来，块元素独占一行，行内元素共享一行。

#### 浮动布局

浮动方式布局就是使用 `float` 属性。

#### 定位布局

使用position进行定位。

# flex 布局

![flex布局](https://user-gold-cdn.xitu.io/2017/8/20/33cd4b214e7c0ef7a6b0951c5eb79d97?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 什么是 flex 布局

flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性，flex 只支持 ie 10+，所有还是要根据你的项目情况使用（没错，我们要求至少 ie 9，(ಥ_ಥ)）。

## 使用 flex 布局

flex 的使用方法很简单，只需要将其 `display` 属性设置为 `flex` 就可以，也可以设置行内的 flex，记得 Webkit 内核的浏览器，必须加上 `-webkit` 前缀。**注意，设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。**

#### 重要概念

- 容器：父容器、子容器。
- 轴：主轴和交叉轴。

在使用 flex 的元素中，默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）
主轴开始的位置称为 `main start`，主轴结束的位置称为 `main end`。
同理，交叉轴开始的位置称为 `cross start`，交叉轴结束的位置称为 `cross end`。
在使用 flex 的子元素中，占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

### 父容器属性

- [flex-direction：主轴的方向。](#flex-direction)
- [flex-wrap：超出父容器子容器的排列样式。](https://link.juejin.cn/?target=flex-wrap)
- flex-flow：`flex-direction` 属性和 `flex-wrap` 属性的简写形式。
- justify-content：子容器在主轴的排列方向。
- align-items：子容器在交叉轴的排列方向。
- align-content：多根轴线的对齐方式。

### 子容器属性

子容器也有 6 个属性：

- order：子容器的排列顺序
- flex-grow：子容器剩余空间的拉伸比例
- flex-shrink：子容器超出空间的压缩比例
- flex-basis：子容器在不伸缩情况下的原始尺寸
- flex：子元素的 `flex` 属性是 `flex-grow`,`flex-shrink` 和  `flex-basis` 的简写
- align-self

# grid 网格布局

flex 布局虽然强大，但是只能是一维布局，如果要进行二维布局，那么我们还需要使用 grid。

grid 布局又称为“网格布局”，可以实现二维布局方式，和之前的 表格`table`布局差不多，然而，这是使用 CSS 控制的，不是使用 HTML 控制的，同时还可以依赖于媒体查询根据不同的上下文得新定义布局。

## grid 网格布局中的基本概念

### 网格线(Grid Lines)

网格线组成了网格，他是网格的水平和垂直的分界线。一个网格线存在行或列的两侧。我们可以引用它的数目或者定义的网格线名称。

![网格线(Grid Lines)](https://user-gold-cdn.xitu.io/2017/8/20/9bc9d5224b3d0d2970b2f62dc990456c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 网格轨道(Grid Track)

网格轨道是就是相邻两条网格线之间的空间，就好比表格中行或列。所在在网格中其分为grid column和grid row。每个网格轨道可以设置一个大小，用来控制宽度或高度。

![网格轨道(Grid Track)](https://user-gold-cdn.xitu.io/2017/8/20/a2d49458713678dea41afe1b4a190a87?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 网格单元格（Grid Cell）

网格单元格是指四条网格线之间的空间。所以它是最小的单位，就像表格中的单元格。

![网格单元格(Grid Cell)](https://user-gold-cdn.xitu.io/2017/8/20/e41c9e0e7d472e0906a9a7c339476d29?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 网格区域(Grid Area)

网格区域是由任意四条网格线组成的空间，所以他可能包含一个或多个单元格。相当于表格中的合并单元格之后的区域。

![网格区域(Grid Area)](https://user-gold-cdn.xitu.io/2017/8/20/d2e76b9a3878f766d976d060152087a5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 使用 grid 布局

使用 grid 布局很简单，通过display属性设置属性值为 grid 或 inline-grid 或者是 subgrid（该元素父元素为网格，继承父元素的行和列的大小） 就可以了。

网格容器中的所有子元素就会自动变成网格项目（grid item），然后设置列（grid-template-columns）和 行（grid-template-rows）的大小，设置 `grid-template-columns` 有多少个参数生成的 grid 列表就有多少个列。

**注：当元素设置了网格布局，column、float、clear、vertical-align属性无效。**

如果没有设置 `grid-template-columns`，那么默认只有一列，宽度为父元素的 100%，例如

比如我们设置如下的 HTML，

```html
<div class="grid-container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
</div>复制代码
```

在 CSS 中，我们不设置 `grid-template-columns`，只设置 `grid-template-row`

```css
        .grid-container{
            display: grid;
            grid-template-rows: 50px 80px 100px;
            background: pink;
        }
        .item{
            border: 2px solid palegoldenrod;
            color: #fff;
            text-align: center;
            font-size: 20px;
        }
```

![不设置 grid-template-columns](https://user-gold-cdn.xitu.io/2017/8/20/0b6f92930f17f283e7c97eba2497d55a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

设置了 `grid-template-columns` 的话，设置了几个参数，就有几列（不超过 grid item 的个数），然后设置的 `grid-template-row` 参数就是每一列的高度（超出列数的高度无效）

设置了 `grid-template-columns` 的话，设置了几个参数，就有几列（不超过 grid item 的个数），然后设置的 `grid-template-row` 参数就是每一列的高度（超出列数的高度无效）

比如：

```
        .grid-container{
            padding: 20px;
            display: grid;
            grid-template-rows: 50px 100px 60px 80px;
            grid-template-columns: 50px 40px 100px 80px;
            background: pink;
        }
        .item{
            border: 2px solid palegoldenrod;
            color: #fff;
        }复制代码
```

虽然我们设置了四个 `grid-template-rows`，但是因为只有两行，所以只有前两个值生效。效果如下：

![设置 grid-template-columns](https://user-gold-cdn.xitu.io/2017/8/20/21f7b2a8ffec994e6e4e56983f5c60bf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)设置 grid-template-columns

当然，我们也可以像 flex 一样设置每一列的宽度：

```
        .grid-container{
            padding: 20px;
            display: grid;
            grid-template-rows: 50px 100px 60px;
            grid-template-columns: 1fr 1fr 2fr;
            background: pink;
        }复制代码
```

注意到我们使用了一个新的单位：`fr`

> css fr 单位是一个自适应单位，fr单位被用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。

**tips：fr 是基于网格容器可用空间来计算的（flex 也是一样），所以我们可以和其他单位混合使用，如果需要的话**

是不是找到了 flex 的感觉，这样设置效果如下：

![使用 fr 按比例设置宽度](https://user-gold-cdn.xitu.io/2017/8/20/be393b8ce9267ae2e0001cb4d457681c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)使用 fr 按比例设置宽度

`minmax()` 函数来创建行或列的最小或最大尺寸，第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受 `auto` 值。`auto` 值允许网格轨道基于内容的尺寸拉伸或挤压。

```
        .grid-container{
            padding: 20px;
            display: grid;
            grid-template-rows: minmax(100px,200px) minmax(50px,200px);
            grid-template-columns: 1fr 1fr 2fr;
            background: pink;
            height: 300px;
        }复制代码
```

我们将第一行的高度设置为 `minmax(100px,200px)`，第二行的高度设置为`minmax(50px,200px)`，容器总高度设置为 `300px`，这时每一列的高度要怎么算呢？

先判断总高度是小于第一列高度的最大值和第二列高度的最大值之和的，如果大于最大值之和，那么第一列和第二列的高度都为设置的最大值，如果是小于最小值之和的话，那么第一列和第二列的高度都为设置的最小值。

现在问题来了，我们这种情况是总高度是小于第一列高度的最大值和第二列高度的最大值之和的，这样就是先用 总高度 `300px` - 第一列最小高度 `100px` - 第二列最小高度 `50px` = `150px`。
第一列高度：第一列最小高度 `100px` + `150px/2` = `175px`;
第二列高度：第一列最小高度 `50px` + `150px/2` = `125px`;

## 重复行或者列

`repeat()` 属性可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。

`repeat()` 也接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。

```
        .grid-container{
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(2,100px);
            grid-template-rows: repeat(3,100px);
            background: pink;
        }复制代码
```

效果如下：

![repeat()](https://user-gold-cdn.xitu.io/2017/8/20/a437f5a1f6759f37b1abd2b5b58cd18c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)repeat()

## 间距

`grid-column-gap`：创建列与列之间的距离。
`grid-row-gap`：行与行之间的距离。

```
        .grid-container{
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(2,100px);
            grid-template-rows: repeat(3,100px);
            grid-column-gap: 50px;
            grid-row-gap: 15px;
            background: pink;
        }复制代码
```



![设置间距](https://user-gold-cdn.xitu.io/2017/8/20/72bdd4dda24e729abdc96785162d76ec?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)设置间距



或者使用 `grid-gap` 是 `grid-row-gap` 和 `grid-column-gap`两个属性的缩写。

-----未完待续

# 常用的 CSS 布局

在介绍了 CSS 的布局方式之后，我们来看一下常用的 CSS 布局有哪些

## 水平垂直居中

### 水平居中

一般水平居中还是比较容易的，我一般都是先看子元素

#### 固定宽度

这种方式是绝对定位居中，除了使用 `margin`，我们还可以使用 `transform`

 `magin:0 auto`；

```css
        .container{
            width: 300px;
            height: 200px;
            background: pink;
            position: relative;
        }
        .inner{
            width: 100px;
            height: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -25px;
            margin-left: -50px;
            background: #fff;
            text-align: center;
        }复制代码
        .container{
            width: 300px;
            height: 200px;
            background: pink;
            position: relative;
        }
        .inner{
            width: 100px;
            height: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            text-align: center;
        }
```

#### 宽度未知

将子元素设置为行内元素，然后父元素设置 `text-align: center`。

```css
.container{
    width: 300px;
    height: 200px;
    background: pink;
    position: relative;
    text-align: center;
}
.inner {
    display:inline-block;
}
```

#### 多个块状元素

```css
.container{
            width: 250px;
            height: 200px;
            background: pink;
            position: relative;
            text-align: center;
            padding: 20px;
        }
        .inner{
            display: inline-block;
            width: 50px;
            height: 150px;
            margin: 0 auto;
            background: #fff;
            text-align: center;
        }
```

```css
.container {
    width:100vw;
    display: flex;
    justify-content: center;
}
.inner{
    background: #fff;
	width: 50px;
	height: 150px;
    margin-left: 10px;
}
```

### 垂直居中

单行行内元素

```css
#container {
    height: 480px;
}
#inner {
    display: inline-block;
    height:200px;
    line-height:200px;
}
```

#### 多行元素

```css
.container {
            width: 200px;
            height: 400px;
            background: pink;
            position: absolute;
            display: table;
            vertical-align:middle;
        }

        .inner{
            display: table-cell;
            vertical-align:middle;
        }
```

```css
.container {
    width:100vw;
    display: flex;
	align-item: center;
}
```

## 图片和文字垂直居中

经常有看到设计稿是图片和文字垂直居中的，那么怎么才能让图片和文字垂直居中呢？
只需要给图片一个 `vertical-align: middle;` 属性就可以：

```
<div class="container">
    <img src="WechatIMG110.jpg" height="260" />
    <p>123456</p>

</div>复制代码
        .container {
            background: pink;
            padding: 20px;
            height: 400px;

        }
        .container img{
            display: inline-block;
            vertical-align: middle;
        }

        .container p{
            display: inline-block;

        }
```