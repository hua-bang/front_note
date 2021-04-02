#### 外观模式

介绍：隐藏系统复杂性，并向客户端提供一个可以访问系统的接口。

图示：

![image-20210402084313173](F:\github\js_note\DesignMode\DesignMode\Facade\image-20210402084313173.png)

```js
class SubA {
    methodA() {
        console.log("A");
    }
}

class SubB {
    methodB() {
        console.log("B");
    }
}

class SubC {
    methodC() {
        console.log("C");
    }
}

class HSystem{
    constructor() {
        this.suba = new SubA();
        this.subb = new SubB();
        this.subc = new SubC();
    }

    methodA() {
        return this.suba.methodA();
    }

    methodB() {
        return this.subb.methodB();
    }

    methodC() {
        return this.subc.methodC();
    }
}

let sys = new HSystem();
sys.methodA();
sys.methodB();
sys.methodC();

export default {HSystem};
```

优点：

1.  减少系统相互依赖。
2.  提高灵活性。 
3. 提高了安全性。

缺点：

1. 不符合开闭原则，修改比较麻烦