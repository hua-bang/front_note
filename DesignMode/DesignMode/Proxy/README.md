### 代理模式

不和目标对象直接接触，但可以通过中间对象（即代理）授权访问

介绍：不直接访问目标对象，通过中间代理做授权和控制

注意：代理和目标对象使用的方法名称需要相同，这也是和适配器有区别的地方

图示：

![image-20210402074747930](F:\github\js_note\DesignMode\DesignMode\Proxy\image-20210402074747930.png)

uml类图：

![image-20210402075121240](F:\github\js_note\DesignMode\DesignMode\Proxy\image-20210402075121240.png)

示例：

```js
class RealImage{
    constructor(fileName) {
        this.fileName = fileName
    }

    display() {
        console.log(`this file name is ${this.fileName}`);
    }
} 

class ProxyImage{
    constructor(fileName) {
        this.realImage = new RealImage(fileName);
    }

    display() {
        this.realImage.display();
    }
}


let proxyImage = new ProxyImage("xx.jpg");
proxyImage.display();

export default ProxyImage;
```

#### 场景

- 网页事件代理

- jQuery $.proxy

  - ```js
    $("#div1").click(function() {
    	setTimeout($.proxy(function() {
            $(this).addClass('red')
        }, this), 1000)
    })
    ```

- ES6的proxy

  - 举例，明星代理

    ```js
    let star = {
        name: "hug",
        age: 24,
        phone: "13454645631"
    };
    
    let handler = {
        get(target, property) {
            if(property === "phone") {
                return 15315453154;
            }else if(property === "price") {
                return 1600000;
            }else if(property === "age") {
                return 18;
            }
            else {
                return "不可透露";
            }
        },
        set(target, property, value) {
            if(property === "customPrice") {
                if(value < 1600000) {
                    throw new Error("the price must be higher")
                }else {
                    target[property] = value;
                    return true;
                }
            }else {
                return "无法修改";
            }
        }
    }
    
    let agent = new Proxy(star, handler);
    console.log(agent.phone);
    console.log(agent.price);
    console.log(agent.age);
    console.log(agent.customPrice);
    
    agent.customPrice = 1600000
    ```

    #### 设计原则验证

    - 代理类和目标类分离，隔开目标类和使用者
    - 符合开放封闭原则

#### 代理模式和适配器模式

用意不一样

- 适配器模式：提供一个不同的接口（无法使用）
- 代理模式：提供一模一样的接口（无权使用）

#### 代理模式和装饰器模式

- 装饰器模式：扩展功能，原来的功能不变直接使用
- 代理模式：显示原有功能，但是经过限制