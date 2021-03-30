# Grid布局

### 概述

- 网格布局时最强大 的css布局
- Grid思想 指定行和列 二维布局

#### 基本概念

- 容器和项目

  ```html
  <div>
      <p>
          1
      </p>
      <p>
          2
      </p>
      <p>
          3
      </p>
  </div>
  ```

- 行和列

  ![img](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

- 单元格

  行和列的交叉区域，称为"单元格"（cell）

  正常情况下，`n`行和`m`列会产生`n x m`个单元格。比如，3行3列会产生9个单元格。

- 网格线

  - n行有n+1水平网格线，m有m+1垂直网格线

#### 容器属性

分类：容器属性；项目属性

- **display**

  - grid
  - inline-grid
  - 注意：注意，设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。

- **grid-template-columns 属性，grid-template-rows 属性**

  - grid-template-columns 列宽

  - grid-template-rows  行高

  - repeat

    - ```js
      .grid2 {
              display: grid;
              grid-template-columns: repeat(3, 33.3%);
              grid-template-rows: 33.3% 33.3% 33.3%;
              width: 300px;
              height: 300px;
            }
      ```

  - auto-fill

    - ```css
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
      }
      ```

  - fr

    - ```css
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      ```

  - minmax()产生区间范围

    - ```css
      grid-template-columns: 1fr 1fr minmax(100px, 1fr);
      ```

  - auto

    - ```css
      grid-template-columns: 100px auto 100px;
      ```

  - **网格线的名称**

  - **布局实例**（7，3）

    - ```css
      grid{
      	display: grid;
          grid-template-columns:30% 70%;
      }
      ```

  - 示例

    - 像素值

      ```css
      .grid1 {
              display: grid;
              grid-template-columns: 100px 100px;
              grid-template-rows: 100px 100px 100px 100px;
            }
      ```

    - 百分比

      ```css
      .grid2 {
              display: grid;
              grid-template-columns: 33.3% 33.3% 33.3%;
              grid-template-rows: 33.3% 33.3% 33.3%;
              width: 300px;
              height: 300px;
            }
      ```

      