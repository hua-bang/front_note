### 前端路由

- #### **前言**

  - 现代前端项目多为单页Web应用(SPA)，在单页Web应用中路由是其中的重要环节。

- ##### 什么是SPA

  - spa（singal page web application）
  - spa一个web项目只有一个HTML，spa不会因为用户的操作进行页面的跳转或加载，而是用js动态改变HTMl内容。

- **传统多页面到视图**

  - 传统页面：

    ![img](https://raw.githubusercontent.com/chenqf/frontEndBlog/master/images/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1/1.png)

  - 视图：

    ![img](https://raw.githubusercontent.com/chenqf/frontEndBlog/master/images/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1/2.png)

- ##### 前端路由的由来

  - 最开始网页是多页面，ajax流行后，spa慢慢出现
  - SPA 的出现大大提高了 WEB 应用的交互体验。在与用户的交互过程中，不再需要重新刷新页面，获取数据也是通过 Ajax 异步获取，页面显示变的更加流畅。（重点：不用通过url改变页面内容）
  - 但导致两个问题：
    - spa无法准确记录用户操作
    - 对seo不友好，不方便引擎搜索。

- ##### 什么是前端路由

  - 保证只有一个html页面，与用户交互不刷新或跳转页面，给每一个spa视图匹配一个特俗的url，此时seo和前进后退也能实现
  - 至少保证以下两点
    - 改变url且不让游览器发送请求
    - 能监听到路由发生了变化

- ##### hash模式

  - hash：#aaa hash值

  - 原理：由于hash值改变并不会引起游览器页面的刷新和跳转，同时他会触发hashchange事件，对游览器前进后退也能控制，故hash模式也是实现路由的方法之一

  - 代码实现：

    ```js
    class Router {
        constructor() {
            this.routes = {};
        }
    
        register(hash, callback = () => {}) {
            this.routes[hash] = callback;
        }
    
        registerIndex(callback = () => {}) {
            this.routes['index'] = callback;
        }
    
        registerNotFound(callback = () => {}) {
            this.routes["404"] = callback;
        }
    
        registerError(callback = () => {}) {
            this.routes["error"] = callback;
        }
    
        load() {
            let hash = location.hash.slice(1), handle;
            if(!hash) {
                handle = this.routes['index']
            }else if(!this.routes.hasOwnProperty(hash)) {
                handle = this.routes["404"];
            } else {
                handle = this.routes[hash];
            }
            try{
                handle.call(this);
            }catch(err) {
                (this.routes["error"] || (() => {})).call(this, err);
            }
        }
    
    }
    
    export default Router;
    ```

- ##### history模式

  - 早期的history对象只能用于多页面跳转

    ```js
    history.go(1);
    history.go(-1);
    history.forward();
    history.back();
    ```

  - history新增的api

    ```js
    history.pushState();	//添加新的状态到历史状态栈
    history.replaceState();	//用新的状态替代当前状态
    history.state
    // 同城与window.onpopstate配合使用
    ```

    参数说明：

    - state: 合法的js对象，用于popstate
    - title：大多游览器忽略这个参数，可以用null代替
    - url：任意有效的url，更新游览器地址栏

    区别：

    - history.pushState() 在保留现有历史记录的同时，将 url 加入到历史记录中。
    - history.replaceState() 会将历史记录中的当前页面历史替换为 url。

    由于history.pushState()和history.replaceState()方法都可以在改变url同时，不刷新页面，从而实现前端路由。

  - 实现前端路由

    - 条件

      - pushState和replaceState都可以做到改变url，不刷新页面
      - 但无法监听事件。

    - 思路

      - 罗列所有可能触发history改变的情况，并一一拦截，变相监听history改变。

        - 变化的方式
          1. 点击前进 后退按钮
          2. 点击a标签
          3. 调用history.pushState()
          4. 调用history.replaceState()

      - 编码思路

        - 首先编写注册和处理的基本函数

          ```js
          class Router {
          
              constructor() {
                  this.routes = {};
              }
          
              register(path, callback = () => {}) {
                  this.routes[path] = callback;
              }
          
              registerIndex(callback = () => {}) {
                  this.routes["/"] = callback;
              }
          
              registerError(callback = () => {}) {
                  this.routes["error"] = callback;
              }
          
              registerNotFound(callback = () => {}) {
                  this.routes["404"] = callback;
              }
          
              load() {
                  let path = location.path;
                  this.handle(path);
              }
          
              handle(path) {
                  let method;
          
                  if(this.routes.hasOwnProperty(path)) {
                      method = this.routes[path];
                  }else {
                      method = this.routes["404"];
                  }
          
                  try{
                      method.call(this);
                  }catch(err) {
                      (this.routes["error"] || (() => {})).call(this, err);
                  }
              }
          }
          ```

        - 监听游览器前进后退( 监听[popstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event))

          注意，这里中如果触发popstate之前有用到 pushState，replcaeState的话，那么，会刷新url，但不会跳转页面

          ```js
          listenPopstate() {
               window.addEventListener("popstate", (e) => {
                  let state = e.state || {}, path = state.path || '';
                  this.handle(path);
              })   
          }
          ```

        - 监听a标签

          原理：实现所有的a标签点击都不让跳转，而是使用pushState

          ```js
          listenLink() {
              window.addEventListener("click", (e) => {
                      let dom = e.target;
                      if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                          e.preventDefault()
                          this.assign(dom.getAttribute('href'));
                      }
             }, false)
          }
          ```

      - 最终代码

        ```js
        class Router {
        
            constructor() {
                this.routes = {};
                this.listenLink();
                this.listenPopstate();
            }
        
            register(path, callback = () => {}) {
                this.routes[path] = callback;
            }
        
            registerIndex(callback = () => {}) {
                this.routes["/"] = callback;
            }
        
            registerError(callback = () => {}) {
                this.routes["error"] = callback;
            }
        
            registerNotFound(callback = () => {}) {
                this.routes["404"] = callback;
            }
        
            load() {
                let path = location.path;
                this.handle(path);
            }
        
            handle(path) {
                let method;
                if(!path) {
                    method = this.routes["/"];
                }else if(this.routes.hasOwnProperty(path)) {
                    method = this.routes[path];
                }else {
                    method = this.routes["404"];
                }
        
                try{
                    method.call(this);
                }catch(err) {
                    (this.routes["error"] || (() => {})).call(this, err);
                }
            }
        
            listenLink() {
                window.addEventListener("click", (e) => {
                    let dom = e.target;
                    if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                        e.preventDefault()
                        this.assign(dom.getAttribute('href'));
                    }
                }, false)
            }
        
            listenPopstate() {
                window.addEventListener("popstate", (e) => {
                    let state = e.state || {},
                        path = state.path || '';
                    this.handle(path);
                })
            }
        
            assign(path) {
                history.pushState({path},null,path);
                this.handle(path);
            }
        
            replace(path) {
                history.replaceState({path},null,path);
                this.handle(path);
            }
        }
        
        export default Router;
        ```

  - 注意：

    - history 在修改 url 后，虽然页面并不会刷新，但我们在手动刷新，或通过 url 直接进入应用的时候， 服务端是无法识别这个 url 的。因为我们是单页应用，只有一个 html 文件，服务端在处理其他路径的 url 的时候，就会出现404的情况。
    -  所以，如果要应用 history 模式，需要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回单页应用的 html 文件。

#### hash,history如何抉择

- hash 模式相比于 history 模式的优点：
  - 兼容性更好
  - 无需服务端配合处理非单页的url地址
- hash 模式相比于 history 模式的缺点：
  - 会带有#
  - 锚点失效
  - 相同 hash 值不会触发动作将记录加入到历史栈中，而 pushState 则可以。（因为没有触发hashchange）