# 移动端1px解决方案

## 前言

移动端web项目越来越多，设计师对于UI的要求也越来越高，比如1px 的边框。在`高清屏`下，移动端的1px 会很粗。

### 产生原因

那么为什么会产生这个问题呢？主要是跟一个东西有关，**DPR(devicePixelRatio)** 设备像素比，它是默认缩放为100%的情况下，`设备像素`和`CSS像素`的比值。

window.devicePixelRatio=物理像素 /CSS像素

### 解决方案

1. #### WWDC对ios给出的方案

   在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。

   **总结：**

   - 优点：简单，没有副作用
   - 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。

2. #### 使用边框图片

   ```css
   border: 1px solid transparent;
   border-image: url('./../../image/96.jpg') 2 repeat;
   复制代码
   ```

   **总结：**

   - 优点：没有副作用
   - 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。

3. #### 使用box-shadow实现

   ```css
   box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
               1px  0  1px -1px #e5e5e5,   //右边线
               0  1px  1px -1px #e5e5e5,   //下边线
               -1px 0  1px -1px #e5e5e5;   //左边线
   ```

   **总结**

   - 优点：使用简单，圆角也可以实现
   - 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。

4. #### **使用伪元素**

   一条border

   ```css
   .setOnePx{
     position: relative;
     &::after{
       position: absolute;
       content: '';
       background-color: #e5e5e5;
       display: block;
       width: 100%;
       height: 1px; /*no*/
       transform: scale(1, 0.5);
       top: 0;
       left: 0;
     }
   }
   ```

   可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐，将width 设置100%，height设置为1px，然后进行在Y方向缩小`0.5倍`。

   四条border

   ```css
   .setBorderAll{
        position: relative;
          &:after{
              content:" ";
              position:absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: 200%;
              transform: scale(0.5);
              transform-origin: left top;
              box-sizing: border-box;
              border: 1px solid #E5E5E5;
              border-radius: 4px;
         }
       }
   ```

   同样为伪元素设置绝对定位，并且和父元素左上角对其。将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的`0.5倍` **总结：**

5. #### 设置vieport的scale值

   view，rem,js

   **总结**：

   - 优点：全机型兼容，直接写`1px`不能再方便
   - 缺点：适用于新的项目，老项目可能改动大

6. 

