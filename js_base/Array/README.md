## 数组

- ##### 数组的api其实比较丰富，琐碎，实际中应该多用，多结合

- 数据的创建

  - 构造函数方法

    ```js
    let arr1 = new Array();
    let arr2 = new Array(10);
    let arr3 = new Array('a');
    let arr4 = new Array(10, 'a');
    ```

  - 字面量

    ```js
    let arr5 = [1,23,3,5];
    ```

  - Array.of()方法（ES6新增）：

    ```js
    let arr6 = Array.of(3); 
    // 参数可以是各种类型
    let arr7 = Array.of(1, 'a', true, null, undefined, {name: "zhangsan"}, [45]);
    let arr8 = Array.of(...arr7);
    ```

- **数据检测**

  - toString

    ```js
    Object.prototype.toString.call([]) === "[object Array]";
    ```

  - Array.isArray()

    ```js
    Array.isArray([1,2,3]);
    ```

    