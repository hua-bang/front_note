### Virtual DOM

#### 由来

- DOM比较昂贵
- 频繁的去做 DOM 更新会产生一定的性能问题。
- 用js对象去描述一个DOM节点

#### 认识

- 虚拟dom是对dom的抽象
- 本质是js对象

#### 关键要素

- virtual Dom的创建
  - 需要抽象好virtual DOM的结构
- virtual Dom Tree的建立
- virtual Dom的更新
  - 将真实dom和virtual DOM对应起来
- virtual Dom的diff
  - 目的：比较新旧Virtual DOM Tree找出差异并更新.
  - 现象：
    - 要比较Virtual DOM Tree的差异,理论上的时间复杂度高达O(n^3)
    - Virtual DOM库都是只比较同级差异,在这种情况下我们的时间复杂度是O(n).

#### 实现虚拟DOM（这里是DOM-DIFF）并非是VUE的实现方法

思路:

1. 确定好虚拟DOM元素的类,数据结构,用来描述DOM

   ```js
   class VNode {
       /**
        * @param type eg:li div a
        * @param props eg:{class: "xxx"}
        * @param children eg:[]
        */
       constructor(type, props, children) {
           this.type = type;
           this.props = props;
           this.children = children;
       }
   }
   ```

2. 如何构建虚拟dom树

   ```js
   function render(vNode) {
       // 创建对应的node节点
       let node = document.createElement(vNode.type);
   
       // 遍历domObj中props的属性，进行dom属性设置
       for (const key in vNode.props) {
           setAttr(node, key, vNode.props[key]);
       }
   
       // 子节点的插入
       vNode.children.forEach(child => {
           // 如果是VNode 则渲染后插入， 如果不是 则说明为普通字符串，生成一个textNode 直接插入
           let childNode = child instanceof VNode ? render(child) : document.createTextNode(child);
           node.appendChild(childNode);
       })
       
       return node;
   }
   ```

3. Diff important

   - 意义：给定两棵树，采用先序深度优先遍历找到最少的转化步骤
   - 作用：两个虚拟对象创建出补丁，描述改变内容，更新dom

   比较规则

   - 新的DOM节点不存在{type:"REMOVE",index}
   - 文本的变化{type: "TEXT", text:1}
   - 当节点类型相同，看属性相同不相同{type:'ATTR',attr:{class:"list"}}
   - 节点类型不同{{type: "REPLACE"}}

   walk方法

   1. 每个元素都有一个补丁，需要创建一个数组（如果未更改则数组最终为空）
   2. 如果没有new节点的话，说明被移除了，将type为REMOVE的类型放在当前补丁里
   3. 如果新老节点是文本的话，判断一下文本是否一致，再指定类型TEXT并把新节点放到当前补丁
   4. 如果新老节点的类型相同，那么就来比较一下他们的属性props
      - 属性比较
        - diffAttr
          - 比较新老attr
          - 把newAttr键值对赋给patch对象并返回此对象
      - 子节点，则比较子节点的不同，在调用walk
        - diffChildren
          - 遍历oldChildren，然后递归调用walk再通过child和newChildren[index]去diff
   5. 上面三个如果都没有发生的话，那就表示节点单纯的被替换了，type为REPLACE，直接用newNode替换即可
   6. 当前补丁里确实有值的情况，就将对应的补丁放进大补丁包里

4. Patch补丁更新

   打补丁需要传入两个参数，一个是打补丁的元素，另一个是所要打的补丁

   patch做了啥：

   - 用一个变量来得到传递过来的所有补丁allPatches
   - patch接收参数（node, patches）
     - 在方法内部调用walk方法，给某个元素打上补丁
   - walk方法里获取子节点
     - 给子节点也进行先序深度优先遍历，递归walk
     - 如果当前的补丁是存在的，那么就对其打补丁(doPatch)
   - doPatch打补丁方法会根据传递的patches进行遍历
     - 补丁类型不同进行不同操作
       - 属性ATTR for in去遍历attrs对象，当前的key值如果存在，就直接设置属性setAttr； 如果不存在对应的key值那就直接删除这个key键的属性
       - 文字TEXT 直接将补丁的text赋值给node节点的textContent即可
       - 替换REPLACE 新节点替换老节点，需要先判断新节点是不是Element的实例，是的话调用render方法渲染新节点；
         - 不是的话就表明新节点是个文本节点，直接创建一个文本节点就OK了
         - 之后再通过调用父级parentNode的replaceChild方法替换为新的节点
       - 删除REMOVE 直接调用父级的removeChild方法删除该节点
   - 将patch方法导出

#### 总结

dom-diff过程

1. 将js模拟dom
2. 将此虚拟dom转化成真实的dom，插入
3. 有时间修改虚拟dom，则比较两个树差异（diff算法）
4. 差异对象应用在真实的DOM上