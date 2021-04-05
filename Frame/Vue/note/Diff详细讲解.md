## 详解vue的diff算法

#### 前言：

认识diff之前，我们需要了解一些知识点

1. #### 数据发生变化的时候，vue是怎么更新节点？

   渲染真实的DOM的开销是比较大的，有时候也许我们只是修改了某个数据，可能会造成整个dom树的渲染，diff算法就是为了解决这个问题，让我们在修改小块dom的时候不要更新整个dom。

   vue会先根据真实的dom生成一颗virtual Dom 树，当某个节点的数据改变后会生成一个新的VNode，然后VNode和oldVNode比较，发现不一样的对方就直接修改在真实的dom上

   diff过程就是调用patch函数，比较新旧节点，一边比较一边打补丁

2. #### virtual DOM与真实DOM的区别

   虚拟dom定义了自身的数据结构，有着描述dom节点的属性，是对于真实dom的一种抽象。

3. #### diff比较方式

   在采取diff算法比较新旧节点的时候，比较只会在同层级进行，不会跨层级比较

   下图很明显的体现了不会跨层级比较。

   ![img](https://user-gold-cdn.xitu.io/2018/5/19/163776ba7bda2d47?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

4. #### diff流程图

   当数据放生改变的时候，set方法会调用Dep.notify通知所有订阅者watcher，订阅者就会调用patch给真实的dom打补丁，更新视图。

   ![img](https://user-gold-cdn.xitu.io/2018/5/19/163777930be304eb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

5. #### 具体分析

   - patch
     - 接收两个参数(oldVNode, vNode)
     - 流程：
       - 用sameVNode判断两个节点是否值得比较，值得比较执行patchVNode
       - 不值得比较用VNode替换oldValue
       - 如果两个节点都是一样的，那么就深入检查他们的子节点。如果两个节点不一样那就说明`Vnode`完全被改变了，就可以直接替换`oldVnode`。
   - patchVNode
     - 目的：对比VNode，oldVnode
     - 流程
       - 找到对应的真实dom，el
       - 判断VNode和oldValue是否指向同一个对象，如果是，直接return。
       - 文本节点，不相同，则el的文本节点设置成VNode的文本节点
       - 如果oldVNode有节点而VNode没有，则删除el子节点
       - 如果`oldVnode`没有子节点而`Vnode`有，则将`Vnode`的子节点真实化之后添加到`el`
       - 如果两者都有子节点，则执行`updateChildren`函数比较子节点，这一步很重要
   - updateChildren（import）
     - ![img](https://user-gold-cdn.xitu.io/2018/5/19/163783b76bc005cf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
     - ![img](https://user-gold-cdn.xitu.io/2018/5/19/163783eb58bfdb34?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
     - 概括
       - 将VNode子节点`Vch`和`oldVnode`的子节点`oldCh`提取出来
       - oldCh和vCh各有两个头尾的变量startIdx和EndIdx，它们的2个变量相互比较，一共有4种比较方式。
       - 如果都没匹配，则设置key，用key进行比较，在比较的过程中，变量会往中间靠，一旦`StartIdx>EndIdx`表明`oldCh`和`vCh`至少有一个已经遍历完了，就会结束比较。
     - 流程：
       - 现在分别对oldS，oldE，S，E两两进行比较（2C21）,对应向相同节点会移动Vnode的位置
         - 如果是oldS和E匹配上了，那么真实dom中的第一个节点会移到最后
         - 如果是oldE和S匹配上了，那么真实dom中的最后一个节点会移到最前，匹配上的两个指针向中间移动
         - 四种匹配都没能成功，则找key
           - 如果都存在key，那么根据oldChild的key生成一张hash表，用S的key与hash做匹配，判断s和匹配节点是不是sameNode，如果是，就在真实dom中将成功的节点移到最前面，否则，将`S`生成对应的节点插入到dom中对应的`oldS`位置，`S`指针向中间移动，被匹配old中的节点置为null。
           - 如果没存在key，则直接将s生成的新节点插入到真实的dom（新生成的节点实际上是插入到oldStart后面）
       - 匹配结束后，两个情况
         - oldS>oldE表示old先遍历完了，多余的根据index添加到dom上
         - S>E表示vCh遍历完，[oldS,oldE]多余节点删除

