# Object
+ ###理解对象
    + 定义对象
    ```js
    let person1 = new Object();  //{}
    person1.name = "hug"; //定义属性
    
    let person2 = {
        name: "hug"
    }
    person2.name = "hua"; //修改属性
    console.log(person1, person2);
    ```
    属性类型
        内部属性，开发者不能直接访问，但可以用两个中括号括起来，比如[[Enumerable]].
        属性分两种：数据属性、访问器属性(getter setter);
    + 数据属性
        数据属性包含一个保存数据值的位置。有4个属性描述它们的行为。
        + [[Configurable]]: 表示属性是否可以通过delete删除并重新定义。默认情况下为true;不可逆。
        + [[Enumerable]]: 表示这个属性是否可被遍历，能否用for-in循环返回。默认情况下为true;
        + [[Writable]]: 表示这个属性的值是否可以被修改，默认为true.
        + [[Value]]: 包含属性实际的值，默认为undefined
        + 使用定义:
            ```js
            let person = {};
            Object.defineProperty(person,"name", {
              value: "hug"    //  其余配置项默认为false
            })
            //注意严格模式
            ```
    + 访问器属性 访问器属性不包括数据值，相反，包含的是getter和setter的函数，自己定义。访问器和数据属性不要同名。也是四个属性描述行为：
        + [[Configurable]]: 表示属性是否可以通过delete删除并重新定义。默认情况下为true;不可逆。
        + [[Enumerable]]: 表示这个属性是否可被遍历，能否用for-in循环返回。默认情况下为true;
        + [[Get]]: 获取函数，在读取属性时调用。默认为undefined。
        + [[Set]]: 设置函数。在写入属性时调用。默认为undefined。
        + 定义方法：
            ```js
            let book = {
                _name: "JavaScript",
                _year: "2021",
                get name() {
                    return this._name;
                }
            }
            Object.defineProperty(book,"year", {
                get() {
                    return this._year;
                },
                set(year) {
                    this._year = year;
                }
            })
            ```
    + 定义多个属性 Object.defineProperties()
        ```js
        Object.defineProperties()
        ```
    + 读取属性的特性 Object.getOwnPropertyDescriptor(obj, propertyName) Object.getOwnPropertyDescriptors(obj)
        ```js
        Object.getOwnPropertyDescriptor(obj,propertyName)
        Object.getOwnPropertyDescriptors(obj)
        ```
    + 合并对象 merge mixin Object.assign(obj1,...objArr); 
        + obj的属性时会被改变的 
        + 一个目标对象和一个或多个源对象（可枚举的属性，自有属性）复制到目标对象 
        + 不能在两个对象转移获取函数和设置函数
        + 没有回滚的概念。量力而行
        ```js
        Object.assign(obj1,obj2,obj3);
        ```
    + 对象标识及相等判断 Object.is()
        ```js
        Object.is(obj1,obj2);  //此时的NaN也为真了
        ```
    + 增强的对象语法
        + 属性值简写
            ```js
            let name = "hug";
            let person = {
              name
            }
            ```
        + 可计算属性(可以用变量 也可以用表达式):
            ```js
            let nameKey = "name";
            let person = {
              [nameKey]: "hug"
            }
            ```
        + 简写方法名:
            ```js
            let person = {
              say() {
    
              }
            }
            ```
        + 解构
+ ### 创建对象
    + ####工厂模式
        ```js
        function createPerson(name, age, job) {
            let person = {
                name,
                age,
                job,
                sayName() {
                    console.log(this.name);
                }
            }
            return person;
        }
        ```
    + #### 构造函数
        ```js
            function Person(name, age, job) {
                this.name = name;
                this.age = age;
                this.job = job;
                this.say = () => {
                    console.log(this.name);
                }
            }
        ```
        + 没有显示创建对象
        + 属性和方法都赋值给this
        + 无return
        + Person实例 应该用new运算符。
            + 在内存中创建一个新对象。
            + 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性。
            + 构造函数内部的this被赋值为这个新对象
            + 执行函数内部的代码（添加属性）
            +  返回非空对象，则返回该对象。否则，返回刚创建的对象。
        + 构造函数也是函数
            + 调用方式和普通函数不同。 new关键字。
            + 在调用一个函数而且没有明确设置this值的情况下，this始终指向Global对象
        + 构造函数的问题
            + 构造函数定义的方法每个实例会创建多一遍，不是同一个Function实例。 
    + #### 原型模式
      + 每个函数都会创建一个prototype属性，包含应该有特定引用类型的实例共享的属性和方法。实际上，这个对象就是通过构造函数创建的对象的原型。上面定义的属性和方法可以被对象实例共享。
      + 理解原型
        + 都会有prototype属性 同时函数的prototype的constructor指向函数本身
      + 原型层级
        + 访问属性时 从实例本身一级一级往上找，找到未知
        + 如果实例中在实例本体定义了原型中本有的元素，那么也不会修改到原型的值。而是在实例添加了同名的属性。遮蔽。
        + 原型和in操作符
        + 属性枚举
      + 对象迭代
        + 其他原型语法
        + 原型动态性（随时可以修改原型属性或方法）
            + 重写构造函数上的原型再创建的实例才会引用新的原型，之前创建的实例仍然会应用旧的原型
        + 原生对象的原型
            + 不要随意修改
        + 原型的问题
            + 弱化了向构造函数传递初始化参数的能力，导致所有的实例都默认取得相同的值。
            + 原型上属性若为引用值，则不同的实例也算共用同一个引用。
        
