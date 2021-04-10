### webpack面试题

1. #### 有哪些常用的loader，用过哪些loader

   - raw-loader ：加载文件原始内容
   - file-loader：把文件输出到一个文件夹，在代码中通过URL去引用输出的文件
   - url-loader：与file-loader类似，区别是用户可以设一个阈值，大于阈值交给file-loader处理，小于阈值返回文件base64形式编码（处理图片与字体）
   - image-loader:加载并压缩图片文件
   - json-loader：加载json文件
   - babel-loader：讲es6代码转成es5
   - sass-loader：讲scss/sass代码转成css
   - css-loader：加载css，支持模块化，压缩，文件导入等新特性
   - style-loader：讲css代码插入到页面的头部中
   - eslint-loader: 检查js代码
   - vue-loader：加载vue.js单文件组件
   - cache-loader：讲结果缓存到磁盘中

2. #### 常用的plugin，用过哪些plugin？

   - html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
   - web-webpack-plugin：更方便地为但也应用输出html
   - mini-css-extract-plugin：分离样式文件，css提取为独立文件，支持按需加载
   - ModuleConcatenationPlugin：开启Scope Hoisting

3. #### 那你再说一说Loader和Plugin的区别？

   - loader本质是一个函数，在该函数对接收地内容进行转换，返回转换后的结果，因为webpack值认识javaScript，所以Loader成了翻译官，对其他类型的资源进行转译的预处理工作。
   - plugin插件，插件扩展Webpack的功能，在webpack运行生命周期出现许多时间，plugin监听这些事件，并在合适的时机通过webpack提供的api改变输出结果。
   - `Loader` 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性
   - `Plugin` 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入

4. #### webpack构建流程说一下

   webpack的运行流程是一个串行的过程，启动到结束会有以下流程

   1. 初始化参数：根据配置文件中的配置和命令行中的命令参数合并，得到最终的配置
   2. 开始编译：从上一步的参数初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译
   3. 确定人口：根据配置的entry找到所有的入口文件
   4. 编译模板：从入口文件触发，调用了所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，在递归本步骤直到所有入口依赖文件都经过本步骤的处理
   5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
   6. 输出资源：根据入口和模块之间的依赖关系，组成一个个包含多个模块的chunk，chunk转换成一个单独的文件加入输出列表。
   7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，将文件内容写道文件系统
   8. 在此过程中，webpack会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

5. #### 使用webpack开发时，你用过哪些可以提高效率的插件？

   - webpack-dashboard 更友好的展示相关打包信息
   - HotModuleReplacementPlugin：模块热替换

6. #### 模块打包原理知道吗？

   webpack实际上为了每个模块创造了一个到处和导入的环境，本质上并没有修改代码的执行逻辑。代码执行顺序与模块加载顺序也完全一致。

7. #### 文件监听的原理

   发现源码发生变化时，自动重新构建出新输出的文件

   webpack开启监听模式，两种方式

   - 启动webpack命令，带上--watch参数
   - 在配置webpack.config.js中设置watch:true

   缺点：每次都要手动刷新游览器

   原理：轮询半段文件的最后的编辑事件是否变化，如果某个文件发生变化，并不会直接告诉监听者，而是先缓存起来，等aggregateTimeout后再执行

8. #### webpack热更新原理

   webpack的热更新又称热替换(Hot Module Replacement)，缩写HMR。做到不用刷新游览器而将新变更的模块替换旧的模块。

   HMR的核心就是客户端从服务器拉去更新后的文件，准确的说时chunk diff，实际上WDS和游览器建立了websocket的链接，当本地资源发生变化，WDS会想游览器推送更新，并带上构建时的hash，让客户端与上一次资源进行对比。

   有差异后，游览器发送请求来获取更改内容（文件列表，hash），这样客户端就可以再借助这些信息继续向WDS发起请求获取chunk的增量更新

   (拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 `HotModulePlugin` 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像`react-hot-loader` 和 `vue-loader` 都是借助这些 API 实现 HMR。

9. #### 如何对bundle体积进行监控和分析？

   webpack-bundle-analyzer生成bundle

10. #### 文件指纹时什么，怎么用？

    文件指纹是打包后输出的文件名的后缀

    - hash：和整个项目的构建有关，只要项目文件有修改，整个项目构建的hash值就会更改
    - Chunkhash:和Webpack打包的chunk有关，不同的entry有不同的chunkhash
    - ContentHash:根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

11. #### 在实际工程中，配置文件上百行乃是常事，如何保证各个loader按照预想方式工作？

    可以使用enfore强制执行loader的作用顺序，pre代表再所有正常loader之前执行，post是再所有的loader之后执行。

12. #### 优化构建速度

    - 多线程构建：happyPack
    - 压缩代码：
      - 多进程并性压缩
        - webpack-paralle-uglify-plugin
      - mini-css-extract-plugin提取Chunk的css代码到单独文件
    - 做好配置，缩小打包的作用域
      - exclude/include (确定 loader 规则范围)
      - resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
      - resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
      - resolve.extensions 尽可能减少后缀尝试的可能性
      - noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
      - IgnorePlugin (完全排除模块)
      - 合理使用alias
    - 提取公共资源
      - cdn引入一些公共资源
      - 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件
    - DLL
      - webpack-dll-plugin将一些第三方库，或者不改动的代码打包成静态资源，避免反复编译浪费事件资源
    - 利用缓存
      - babel-loader
      - cache-loader
    - Tree sharking
      - 尽可能用ES6 的导入导出，这个对应CommonJs的引入无效
      - mini-css-extract-plugin去除无用css代码
    - Scope hoisting
      - 构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
      - 必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法

13. #### 那代码分割的本质是什么？有什么意义呢？

    代码分割的本质其实就是在`源代码直接上线`和`打包成唯一脚本main.bundle.js`这两种极端方案之间的一种更适合实际场景的中间状态。

    源代码直接上线：虽然过程可控，但是http请求多，性能开销大。

    打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。

14. #### Babel的原理

    Babel大概分为三大部分

    - 解析：将代码转换成AST
      - 词语分析：将代码(字符串)分割为token流，即语法单元成的数组
      - 语法分析：分析token流并生成AST
    - 转化：访问AST节点进行变换操作生成新的AST
    - 生成：以新的AST为基础生成代码