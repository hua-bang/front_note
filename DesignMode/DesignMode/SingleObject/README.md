#### 单例模式

- 介绍

  - 系统中唯一使用
  - 一个类只有一个实例（单例）

- 事例：

  - 登录框
  - 购物车

- 场景:

  - jQuery只有一个$
  - 登陆框

- UML类图：

  ![image-20210325084634517](F:\github\js_note\DesignMode\DesignMode\SingleObject\image-20210325084634517.png)

- 实现：

  - java实现

    - 只能内部new实例，且只能new一次

    ```java
    public class SignleObject {
        private SignleObject instance = null;
        private SignleObject(){};
        public SignleObject getSignleObject() {
            if(instance === null){
                instance = new SignleObject();
            }
            return instance;
        }
    }
    ```

  - js实现

    - 由于js的中类的访问权限并非十分完整，故在new的时候也是不会报错的，甚至会产生新的对象。

    - 使用闭包实现的单例(为了保存instance变量)

      ```js
      class SingleObject {
          login() {
              console.log("login");
          }
      }
      
      SignObject.getInstance = (() => {
          let instance;
          return function() {
              if(!instance) {
                  instance = new SingleObject();
              }
              return instance;
          }
      })
      ```

    - 不适用使用，用静态成员 

      ```js
      class SingleObject {
          login() {
              console.log("login")
          }
          static getInstance() {
              if(!SingleObject.instance) {
                  SingleObject.instance = new SingObject();
              }
              return SingleObject.instance;
          }
      }
      SignleObject.instance = null
      ```

  - 例子

    - 登录框模拟

      - uml图：

        ![image-20210325092441497](F:\github\js_note\DesignMode\DesignMode\SingleObject\image-20210325092441497.png)

      - 代码

        ```js
        class LoginForm {
            constructor() {
                this.state = false; //默认关闭
            }
        
            show() {
                if(this.state) {
                    alert("already show");
                }else {
                    this.state = true;
                    alert("show");
                }
            }
        
            hide() {
                if(!this.state) {
                    alert("already hide");
                }else {
                    this.state = false;
                    alert("hide")
                }
            }
        }
        
        LoginForm.getInstance = (() => {
            let instance;
            return () => {
                if(!instance) {
                    instance = new LoginForm();
                }
                return instance;
            }
        })();
        
        let formA = LoginForm.getInstance();
        let formB = LoginForm.getInstance();
        let formC = new LoginForm();
        formA.show();
        formB.show();
        // formC.show();
        console.log(formA === formB);
        // formC.show();
        
        export {LoginForm}
        ```

        