# 为什么margin-top设置百分比基于父元素的宽度计算的？

### margin-top和padding-top设置百分比问题

比如我们知道css的盒模型，是由margin, border, padding, content 四个部分组成。如果我们想要设置一个元素的外边距，只需要设置margin值就可以。

margin可以取数值、百分比或auto。margin是简写形式，我们也可以定义top、right、bottom、left值。

```css
<style>
        .margin-container {
            background: #333;
            width: 400px;
            height: 200px;
            color: #fff;
        }
        .margin-child {
            margin-top: 10%;
            width: 200px;
            height: 100px;
            background-color: black;
        }
    </style>

    <div class="margin-container">
        <div class="margin-child">
            margin content
        </div>
    </div>
```

那么问题来了，其中`margin-top: 10%;`这个百分比，究竟是基于谁来计算的百分比呢？

```html
<style>
        .padding-container {
            background: #333;
            width: 400px;
            height: 200px;
            color: #fff;
        }
        .padding-child {
            padding-top: 20%;
            width: 200px;
            height: 100px;
            background-color: black;
        }
    </style>
    

    <div class="padding-container">
        <div class="padding-child">
            padding content
        </div>
    </div>
```

此处的`padding-top: 20%;`又是基于谁来计算的百分比呢？

**此处有两个问题：**

- margin-top设置百分比时是基于自身元素还是容器元素的值来计算的？
- margin-top设置百分比时是基于height，还是width计算的？

**答案**：

- margin-top设置百分比时是基于容器元素的值来计算的
- margin-top设置百分比时是基于width计算的

当然，如果你再看看padding-top的设置。也会得到相同的结果。**为什么？为什么会是基于宽度而非高度来计算？为什么是基于父元素而非子元素来进行计算？**

margin/padding计算都基于一个值，width进行计算，这样能够保证top,right,bottom,left四个值的一致性

由于父元素的高度是根据其所包含的子元素进行计算的，如果子元素的margin/padding是基于父元素高度计算的话，那么会引起高度计算的循环依赖。