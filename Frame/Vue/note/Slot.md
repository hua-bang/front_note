### Slot原理

#### 分类：

- 普通插槽
- 作用域插槽

#### 流程：

- 普通插槽：

  - 例子：

    - 父

      ```vue
      <div class="">
          <test>插入slot中</test>
      </div>
      ```

    - 子

      ```vue
      <main>
          我在子组件中
      	<slot></slot>
      </main>
      ```

  - 流程：

    - 父组件先解析，把 test 当做子元素处理，把 插槽当做 test 的子元素处理，生成这样的节点VNode

      ```js
      {    
          tag: "div",    
          children: [{        
              tag: "test",        
              children: ['插入slot 中']
          }]
      }
      ```

      插槽的节点

      ```js
      ['插入slot 中']
      ```

    - 子组件解析，slot为占位符，解析成一个函数

      ```js
      {
          tag: "main",
          children: [
              '我在子组件里面',
              _t('default')
          ]
      }
      ```

    - 这个_t函数，传入default参数执行。默认插槽，default，作用：拿到第一步解析得到的插槽节点，然后返回。

      组件节点完整

      ```js
      {
          tag: "main",
          children: ['我在子组件里面','插入slot 中']
      }
      ```

- 作用域插槽：

  - 例子

    - 父组件中使用 test 组件，test 组件使用作用域插槽

      ```vue
      <div class="">
          <test>
              <template slot-scope="slotProps">
      	插入slot中的{{slotProps}}
              </template>
          </test>
      </div>
      ```

    - 子组件 test 模板

      ```vue
      <main>
          我在子组件中
          <slot :child="child"></slot>
      </main>
      ```

  - 流程：

    - 父组件先解析，把 test 当做子元素处理，把 插槽包装成一个函数，保存给节点

      ```js
      {
          tag: "div",
          children: [{
              tag: "test",
              scopeSlots: {
                  default(slotProps){
                      return ['插入slot中'+slotProps]
                  }
              }
          }]
      }
      ```

    - 子组件解析，slot作为占位符，解析成一个函数

      ```js
      {
          tag: "main",
          children: [
              '我在子组件里面',
              _t('default',{child:11})
          ]
      }
      ```

      为什么多一个参数？因为这是作用域插槽啊，子组件要传给插槽的数据啊

      _t此时，有两个参数

      1. 插槽函数名字default
      2. 需要的作用域数据{child:11}

    - \_t内部执行

      - 根据传入的名字（'default'），拿到第一步解析插槽得到的函数（代号为A）

      - 执行A，传入参数 { child:11 }

        ```js
        function A(slotProps){    
            return ['插入slot 中' + slotProps]
        }
        ```

      于是作用域插槽，就拿到了子组件传过来的数据了

      插槽函数执行，返回解析的插槽节点，_t拿到这个节点，return出去

      于是子组件插槽就完成替换 slot 占位符了，变成下面这样

      ```js
      {
          tag: "main",
          children: [
              '我在子组件里面',
              _t('default',{child:11})
          ]
      }
      
      // 变成下面这样
      
      {
          tag: "main",
          children: [
              '我在子组件里面', 
              '插入slot 中 {child:11}'
          ]
      }
      ```

