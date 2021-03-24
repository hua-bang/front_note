## 设计原则

#### 何为设计

- 即按照哪一种思路或标准实现功能
- 功能相同，可以有不同设计方案来实现
- 伴随需求增加，设计的作用才加以体现

#### UNIX\Liunx设计哲学

- 小即是美
- 每个程序做好一个事
- 快速建立原型
- 舍弃高效率而取可移植性
- 采用纯文本存储数据
- 充分利用软件的杠杆效应（软件复用）
- 使用shell脚本提高杠杆效应和可移植性
- 避免强制性用户界面
- 让每个程序都称为过滤器
- 小准则：
  - 允许用户定制环境
  - 尽量使用操作系统内核小而轻量化
  - 使用小写字母并尽量简短
  - 沉默是金
  - 各部分之和大于整体
  - 寻求90%的解决方案

#### 五大设计原则

- 简称:SOLID
- SO体现多，LID体现少
- 分类：
  - S 单一职责原则
    - 理解：
      - 一个程序只做好一件事
      - 功能过于复杂就拆分，每部分保持独立
  - O 开放封闭原则
    - 理解：
      - 对扩展开放，对修改封闭
      - 增加需求时，扩展新代码，而非修改已有代码
      - 软件设计的终极目标
  - L 李氏置换原则
    - 子类覆盖父类
    - 父类能出现地方子类就能出现
    - js中使用较少（弱类型&继承使用较少）
  - I 接口独立原则
    - 保持接口的单一独立，避免”胖接口“
    - js无接口，使用少
    - 类似与单一职责，这里关注接口
  - D 依赖导致原则
    - 面向接口编程，依赖与抽象与不依赖于具体
    - 使用方只关注接口而不关注具体类的实现
    - js使用少(无接口&弱类型)
- 例子：
  - 用promise说明so
    - 单一职责原则：每个then做好一件事
    
    - 开放封闭原则：新增需求，扩展then
    
    - 代码：
    
      ```js
      export function loadImg(src) {
          return new Promise((resolve, reject) => {
              let image = new Image();
              image.src = src;
              image.onload = () => {
                  resolve(image)
              };
              image.onerror = () => {
                  reject();
              }
          })
      }
      ```

#### 从设计到模式

- 设计
- 模式
- 分开
- ”从设计到模式“

#### 23种设计模式

- 创建型：这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。
- 结构型：这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。
- 行为型：这些设计模式特别关注对象之间的通信。



#### 面试题目：

##### 第一题：

- 题目：

  ```md
  打车，可以打专车和快车。任何车都有车牌号和名称
  不同车价格不同 快车每公里1元 专车每公里2元
  行程开始时，显示车辆信息
  行程结束后，显示打车金额
  ```

- 自己想法：

  - 思路：车作为基类 车牌号和名称 快车和专车作为继承类，定义自己的费用 distance相当于与父类的Car关联

  - uml：

    ![image-20210324100558172](F:\github\js_note\DesignMode\DesignPrinciples\image-20210324100558172.png)

    

  - 代码:

    ```js
    /**
     * 打车，可以打专车和快车。任何车都有车牌号和名称
     * 不同车价格不同 快车每公里1元 专车每公里2元
     * 行程开始时，显示车辆信息
     * 行程结束后，显示打车金额
     */
    
    class Car {
        constructor(number, name) {
            this.price = 1;
            this.number = number;
            this.name = name;
        }
    
        getPrice(distance) {
            return this.price * distance;
        }
    }
    
    class FastCar extends Car{
        constructor() {
            super();
            this.price = 1;
        }
    }
    
    class SpecialCar extends Car{
        constructor() {
            super();
            this.price = 2;
        }
    }
    
    export {
        Car,
        FastCar,
        SpecialCar
    }
    ```

- 课程：

  - uml图：

    ![image-20210324102821215](F:\github\js_note\DesignMode\DesignPrinciples\image-20210324102821215.png)

  - 代码：

    ```js
    class Car {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }
    
    class FastCar extends Car{
        constructor(name, number) {
            super(name, number);
            this.price = 1;
        }
    }
    
    class SpeicalCar extends Car{
        constructor(name, number) {
            super(name, number);
            this.price = 2;
        }
    }
    
    class Trip {
    
        constructor(car) {
            this.car = car;
        }
    
        start() {
            console.log(`行程开始，名称：${this.car.name}, 车牌号: ${this.car.number}`);
        }
    
        end() {
            console.log(`形成结束,价格: ${this.car.price * 5}`);
        }
    }
    
    let car = new SpeicalCar("森塔", 500);
    let trip = new Trip(car);
    trip.start();
    setTimeout(() => {
        trip.end();
    },2000)
    ```

**第二题**：

- 题目：

  ```md
  某停车场，分3层，每层100车位	// 停车场 层 车位
  每个车位都能检测车辆的驶入和离开，车辆进入前，显示每层的空余车位数量	// 车位和车关联关系 车位要有状态
  车辆进入前，显示每层空余车位数量	// 这个信息由停车场提供 显示每层的空余数量
  车辆进入时，识别车牌号和时间	//摄像头  要存放车辆 车辆列表
  车辆出来时，出口显示器显示车牌号和停车时长	//显示器  
  ```

- 想法：

  - 分析：

    - */***

       ** 某停车场，分3层，每层100车位 // Park(停车场类) Floor(层) Place(车位)*

       ** 每个车位都能检测车辆的驶入和离开，车辆进入前，显示每层的空余车位数量  //Place empty(状态)：boolean in(car): 车进去 out() 车出来*

       ** 车辆进入前，显示每层空余车位数量 // Park作为整体来显示 详细需要Floor分别提供数量*

       ** 车辆进入时，识别车牌号和时间    // Camera shot识别*

       ** 车辆出来时，出口显示器显示车牌号和停车时长 // Screen show*

       **/*

  - 代码：

    ```js
    // 车辆
    class Car {
        constructor(num) {
            this.num = num;
        }
    }
    
    //摄像头
    class Camera{
        shot(car) {
            return {
                num: car.num,
                inTime: Date.now()
            }
        }
    }
    
    //屏幕
    class Screen {
        show(car, inTime) {
            console.log("车牌号", car.num);
            console.log("停车时间", Date.now() - inTime);
        }
    }
    
    
    // 停车场 
    class Park {
        constructor(floors) {
            this.floors = floors;
            this.camera = new Camera();
            this.screen = new Screen();
            this.carList = {};  //存储摄像头拍摄的信息；
        }
        in(car) {
            const info = this.camera.shot(car);
            const i = parseInt(Math.random() * 100 % 100);
            const place = this.floors[0].places[i];
            place.in();
            info.place = place;
            this.carList[info.num] = info;
        }
        out(car) {
            const info = this.carList[car.num];
            const place = info.place;
            place.out();
            this.screen.show(car, info.inTime);
            delete this.carList[car.num];
        }
        emptyNum() {
            return this.floors.map(floor => `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`).join('\n');
        }
    }
    
    // 层
    class Floor {
        constructor(index, places) {
            this.index = index;
            this.places = places || [];
        }
        emptyPlaceNum() {
            return this.places.filter(v => v.empty === true).length;
        }
    }
    
    //车位
    class Place {
        constructor() {
            this.empty = true;
        }
        in() {
            this.empty = false;
        }
        out() {
            this.empty = true;
        }
    }
    
    // 测试
    const floors = [];
    for(let i =0; i<3;i++) {
        const places = [];
        for(let j = 0; j<100;j++) {
            places[j] = new Place();
        }
        floors[i] = new Floor(i+1, places);
    }
    const park = new Park(floors);
    const car1 = new Car(100);
    const car2 = new Car(200);
    park.in(car1);
    console.log(park.emptyNum());
    setTimeout(() => {
        park.out(car1);
    },2000)
    park.in(car2);
    ```

    