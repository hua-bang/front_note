### Vue中的三个Watcher

#### 场景

- 数据变 --> 使用的数据视图改变
- 数据变 --> 使用数据的计算属性改变 --> 计算属性的视图变
- 数据变--> 开发者主动注册的watch回调函数执行

#### 对应的三种wacther

- 负责督促视图更新的render-watcher（$mount时期创建）
- 执行计算属性更新的computed-watcher(initState中的initComputed)
- 用户普通注册的watcher(initState中的initWatcher)

