# 「Vue源码学习」你真的知道插槽Slot是怎么“插”的吗

Vue 实现了一套内容分发的 API，将`<slot>`元素作为承载分发内容的出口，这是Vue文档上的说明。具体来说，`slot`就是可以让你在组件内添加内容的‘空间’.

#### Vue插槽slot的基本使用

单个插槽|匿名插槽

```vue
//子组件 ： (假设名为：child)
<template>
  <div class= 'child'>
      
  </div>
</template>

//父组件：（引用子组件 child）
<template>
  <div class= 'app'>
     <child> 
        content
     </child>
  </div>
</template>
```

我们知道，如果直接在父组件中的 中添加内容“林三心”，“林三心”文本是不会在页面上渲染的。那么我们如何使添加的内容能够显示呢？在子组件内添加slot 即可。

```vue
<template>
  <div class= 'child'>
      <slot></slot>
  </div>
</template>
```

#### 编译作用域 （父组件在子组件`<slot></slot>`处插入 data）

上面我们了解了，slot 其实就是能够让我们在父组件中添加内容到子组件的‘空间’。我们可以添加父组件内任意的data值，比如这样：

```vue
//父组件：（引用子组件 child）
<template>
  <div class= 'app'>
     <child> {{ parent }}</child>
  </div>
</template>

new Vue({
  el:'.app',
  data:{
    parent:'父组件'
  }
})
```

上方我们可以直接使用我们的数据，但是，我们能否直接是子组件的数据呢？不行。

```vue
// 子组件 ： (假设名为：child)
<template>
  <div class= 'child'>
       <slot></slot>
  </div>
</template>

new Vue({
  el:'child',
  data:{
    child:'子组件'
  }
})

// 父组件：（引用子组件 child）

<template>
  <div class= 'app'>
     <child> {{ child }}</child>
  </div>
</template>
```

直接使用子组件的数据是不可以的。因为：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

#### 后备内容 (子组件`<slot></slot>`设置默认值)

所谓的后背内容，其实就是slot的默认值，有时我没有在父组件内添加内容，那么 slot就会显示默认值，如

```vue
<template>
  <div class='child'>
      <slot>这就是默认值</slot>
  </div>
</template>
```

#### 具名插槽 （子组件多个`<slot></slot>`对应插入内容）

有时候，也许子组件内的slot不止一个，那么我们如何在父组件中，精确的在想要的位置，插入对应的内容呢？ 给插槽命一个名即可，即添加name属性。

```vue
<template>
  <div class= 'child'>
      <slot name='one'> 这就是默认值1</slot>
      <slot name='two'> 这就是默认值2 </slot>
      <slot name='three'> 这就是默认值3 </slot>
  </div>
</template>
```

父组件通过，或`slot="name"（旧语法）`，`v-slot:name`或`#name（新语法）` 的方式添加内容：

```vue
//父组件：（引用子组件 child）
<template>
  <div class= 'app'>
     <child> 
        <template v-slot:"one"> 这是插入到one插槽的内容 </template>
        <template v-slot:"two"> 这是插入到two插槽的内容 </template>
        <template v-slot:"three"> 这是插入到three插槽的内容 </template>
     </child>
  </div>
</template>
```

#### 作用域插槽 (父组件在子组件`<slot></slot>`处使用子组件 data)

通过`slot` 我们可以在父组件为子组件添加内容，通过给`slot`命名的方式，我们可以添加不止一个位置的内容。但是我们添加的数据都是父组件内的。上面我们说过不能直接使用子组件内的数据，但是我们是否有其他的方法，让我们能够使用子组件的数据呢？ 其实我们也可以使用`slot-scope`的方式：

```vue
//子组件 ： (假设名为：child)
<template>
  <div class= 'child'>
      <slot name= 'one' :value1='child1'> 这就是默认值1</slot>    //绑定child1的数据
      <slot :value2='child2'> 这就是默认值2 </slot>  //绑定child2的数据，这里我没有命名slot
  </div>           
</template>

new Vue({
  el:'child',
  data:{
    child1:'数据1',
    child2:'数据2'
  }
})

//父组件：（引用子组件 child）
<template>
  <div class='app'>
     <child> 
        <template v-slot:one='slotone'>  
           {{ slotone.value1 }}    // 通过v-slot的语法 将子组件的value1值赋值给slotone 
        </template>
        <template v-slot:default='slotde'> 
           {{ slotde.value2 }}  // 同上，由于子组件没有给slot命名，默认值就为default
        </template>
     </child>
  </div>
</template>
```

#### Slot插槽的原理

普通插槽

```vue
//子组件 ： (假设名为：child)
<template>
  <div class='child'>
      我在子组件里面
      <slot></slot>
      <slot name="one"></slot>
  </div>
</template>

//父组件：（引用子组件 child）
<template>
  <div class= 'app'>
     <child> 
        这是插入到默认插槽的内容 {{parent}}
        <template v-slot:"one"> 这是插入到one插槽的内容 {{parent}}</template>
     </child>
  </div>
</template>

new Vue({
  el:'.app',
  data:{
    parent:'父组件的值'
  }
})
```

- 父组件先解析，把child当成子元素处理，把插槽当作child的子元素处理，并且在父组件作用域内得出了parent变量的值，生成这样的节点：

  ```js
  {    
    tag: "div",    
     children: [{        
        tag: "child",        
        children: ['这是插入到默认插槽的内容 父组件的值', 
                    '这是插入到one插槽的内容 父组件的值']
    }]
  }
  ```

- 子组件解析，slot作为一个占位符，会解析成一个函数，如下

  ```js
  {    
      tag: "div",    
      children: [
          '我在子组件里面',
          _t('default'), // 匿名插槽，默认名称为default
          _t('one') // 具名插槽，名称为one
      ]
  }
  ```

- _t函数需要传入插槽名称，默认是`default`，具名插槽则传入`name`，这个函数的作用，是把第一步解析得到的插槽节点拿到，然后返回解析后的节点，那么子组件的节点就完整了，插槽也成功认了爹——`div`标签

  ```js
  {    
      tag: "div",    
      children: ['我在子组件里面', 
                  '这是插入到默认插槽的内容 父组件的值', 
                  '这是插入到one插槽的内容 父组件的值']
  }
  ```

#### 作用域插槽

```vue
//子组件 ： (假设名为：child)
<template>
  <div class= 'child'>
      <slot :value1='child1' :value2='child1'></slot>
      <slot name='one' :value1='child2' :value2='child2'></slot>
  </div>           
</template>

new Vue({
  el:'child',
  data:{
    child1: '子数据1',
    child2: '子数据2'
  }
})

//父组件：（引用子组件 child）
<template>
  <div class='app'>
     <child> 
         <template v-slot:default='slotde'> 
            插入默认 slot 中{{ slotde.value1 }}{{ slotde.value2 }}
        </template>
        <template v-slot:one='slotone'> 
            插入one slot 中{{ slotone.value1 }}{{ slotone.value2 }}
        </template>
     </child>
  </div>
</template>
```

1. 过程很复杂，这里就通俗点讲了，父组件先解析，遇到作用域插槽，会将此插槽封装成一个函数保存到子元素 `child` 下

```js
{    
 tag: "div",    
  children: [{        
     tag: "child"
     scopeSlots:{            
         default (data) { // 记住这个data参数               
             return ['插入one slot 中插入默认 slot 中' + data.value1 + data.value2]
         },
         one (data) { // 记住这个data参数             
             return ['插入one slot 中' + data.value1 + data.value2]
         }
     }
    }]
}
复制代码
```

2.轮到子组件解析了，这个时候_t函数又登场了，并且子组件将对应的插槽数据包装成一个对象，传进_t函数

```js
{    
 tag: "div",    
   children: [
     '我在子组件里面',
      _t('default',{value1: '子数据1', value2: '子数据1'}),
      _t('one',{value1: '子数据2', value2: '子数据2'})
      
    ]
  }
复制代码
```

> 接下来就是_t内部执行，包装后的对象被当做data参数传入了scopeSlots中的对应的各个函数，解析成：

```js
{    
  tag: "div",    
   children: [
      '我在子组件里面', 
      '插入默认 slot 中 子数据1 子数据1',
      '插入one slot 中 子数据2 子数据2'
   ]
}
```

### $slots

看到这，相信大家已经清楚了大概一个过程（虽然不是很详细），那么又有一个疑问了，这些解析后的`节点VNode`对象，是存在哪儿呢？你总不能解析出来然后就扔了吧？肯定得找个地方存起来然后进行`真实dom`的渲染，这个地方就是`$slots`

```
//子组件 ： (假设名为：child)
<template>
  <div class= 'child'>
      <slot></slot>
      <slot name='one'></slot>
      <slot name='two'></slot>
      <slot name='three'></slot>
  </div>
</template>

new Vue({
  el:'.child',
  created () {
      console.log(this.$slots) // 看看里面有啥
  }
})
复制代码
//父组件：（引用子组件 child）
<template>
  <div class= 'app'>
     <child> 
        <template> 这是插入到默认插槽的内容 </template>
        <template v-slot:"one"> 这是插入到one插槽的内容 </template>
        <template v-slot:"two"> 这是插入到two插槽的内容 </template>
        <template v-slot:"three"> 这是插入到three插槽的内容 </template>
     </child>
  </div>
</template>
```

> console.log的结果：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db269ceae0b24ed79cfe372c31d88bde~tplv-k3u1fbpfcp-watermark.image)

> 看到这里大家都懂了，`$slots`是一个`Map`，`key`是各个插槽的名称（匿名插槽的`key`为`default`），key对应的value都是各个插槽下面的VNode节点，具体VNode对象里都是长什么样，大家可以自己输出看看，里面东西太多，我就不在这展示了。嘿嘿。


作者：Sunshine_Lin
链接：https://juejin.cn/post/6949848530781470733
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

