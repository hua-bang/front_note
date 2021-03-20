+ #### 防抖和节流

  + **整体图示**

    ![image-20210320080742807](C:\Users\19647\AppData\Roaming\Typora\typora-user-images\image-20210320080742807.png)

  + **防抖(debounce)**

    + 理解：很多事件触发时，只会触发第一次，或者最后一次

    + 定义：当事件触发后，函数需要在delay秒后在触发执行，但当相同事件在触发时，则会重新设置事件，delay秒后执行，知道delay秒内事件不再触发，则最后一次触发函数的时候，会执行.

    + 图示：

      ![img](https://img-blog.csdn.net/20180705005109564?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1cGlhbjE5ODk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

    + 代码：

      ```js
      function debounce(fn, delay, immediate = false) {
          let time;
          return function() {
              let _this = this;
              if(time) {
                  clearTimeout(time);
              }
              if(immediate) {
                  // 无定时器则可视为第一次
                  let doNow = !time;
                  time = setTimeout(() => {
                      time = null
                  },delay)
                  if(doNow) {
                      fn.call(_this, ...argments);
                  }
              }else {
                  setTimeout(() => {
                      fn.call(_this, ...argments);
                  },delay)
              }
          }
      }
      ```

  + **节流（throttle）**

    + **概念：**就是指连续触发事件但是在n秒内指挥执行一次函数。

    + **理解：**n秒内只会执行一次函数。

    + **图示：**

      ![img](https://img-blog.csdn.net/20180705012049136?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1cGlhbjE5ODk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

    + **代码：**

      + 时间戳版

        ```js
        function throttle(fn, wait) {
            let previous = 0;
            return function() {
                let now = new Date().getTime();
                let _this = this;
                if(now - previous >= wait) {
                    fn.call(_this, ...argments);
                    previous = now;
                }
            }
        }
        ```

      + 定时器（变量版）

        ```js
        function throttle(fn, wait) {
            let canRun = true;
            return function() {
                let _this = this;
                if(canRun) {
                    fn.call(_this, ...argments);
                    canRun = false;
                    setTimeout(() => {
                        canRun = true;
                    },wait)
                }
            }
        }
        ```

      + 定时器（定时器变量）

        ```js
        function throttle(fn, wait) {
            let timeout;
            return function() {
                let _this = this;
                if(!timeout) {
                    fn.call(_this, ...argments);
                    timeout = setTimeOut(() => {
                       timeout = null; 
                    });
                }
            }
        }
        ```

  + **总结：**防抖控制次数，节流控制频率。