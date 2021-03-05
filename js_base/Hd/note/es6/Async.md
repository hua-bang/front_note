## async函数

1. #### **含义**

   async函数是Generator的语法糖，例子

   ```javascript
   const gen = function *(){
   	const f1 = yield readFile('/etc/fstab');
       const f2 = yield readFile('/etc/shells');
       console.log(f1.toString())
       console.log(f2.toString())
   }
   
   // 相同如下
   
   const asyncReadFile = async function(){
   	const f1 = await readFile('/etc/fstab');
       const f2 = await readFile('/etc/shells');
       console.log(f1.toString());
     	console.log(f2.toString());
   }
   ```

   **相对于Generator函数改进**

   1. 内置执行器

   2. 更好的语义

   3. 更广的适用性

      co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）

   4. 返回值是promise

      ​	async函数返回值是promise对象，可以用then指定下一步操作

2. #### **基本用法**

   async返回一个promise对象，可以使用then方法添加的回调函数，函数执行时候，一旦遇到await就会先返回，等到异步操作完成，在输出执行函数后面的语句

   ```javascript
   async function getStockPriceByName(name) {
     const symbol = await getStockSymbol(name);
     const stockPrice = await getStockPrice(symbol);
     return stockPrice;
   }
   
   getStockPriceByName('goog').then(function (result) {
     console.log(result);
   });
   ```

   例子

   ```javascript
   async function timeout(ms){
     await new Promise((resovle)=>{
       setTimeout(resovle,ms)
     })
   }
   
   async function asyncPrint(value, ms) {
      await timeout(ms)
      console.log(value)
   }
   
   asyncPrint("hello, async",2000)
   ```

   async函数有多种使用形式

   ```javascript
   async function foo(){}
   
   const foo = async function(){}
   
   let obj = { async foo(){} }
   obj.foo().then()
   
   const foo = async () => {}
   ```

   

3. #### **语法**

   asnc语法简单，难点再错误机制

   **返回promise对象**

   ​	async函数返回promise对象

   ​	async函数内部return语句返回的值，会成为then方法回调函数的参数

   ```javascript
   async function f(){
   	return 'hello,world'
   }
   f().then(v => console.log(v))
   ```

   ​	当async函数内部抛出错误时候，会导致返回的Promise对象变成reject，会被catch方法回调函数接收到

   ```javascript
   async function f(){
   	throw new Error('error')
   }
   
   f().then(
   	v => console.log('resolve',v),
       e => console.log('reject' ,e)
   )
   ```

   **Promise对象状态的变化**

   ​	async函数返回的promise对象，必须等到内部所有await命令后的promise对象执行完成，才会发生状态的改变，除非遇到return或抛出异常，也就是全部的异步操作完成，才会执行then方法指定的回调函数	

   ```javascript
   async function getTitle(url) {
     let response = await fetch(url);
     let html = await response.text();
     return html.match(/<title>([\s\S]+)<\/title>/i)[1];
   }
   getTitle('https://tc39.github.io/ecma262/').then(console.log)
   // "ECMAScript 2017 Language Specification"
   ```

   await命令后面是一个thenable对象（即定义了then函数），则await会将其等同于Promise对象

   await命令后面的Promise对象如果变成了reject状态，则reject的参数会被catch所以接收

   ```javascript
   async function f(){
   	await Promise.reject("error")
   }
   
   f().then(v=> console.log(v)).catch(e=>{console.log(e)})
   ```

   任何一个await语句后面的Promise对象变成reject状态，那么整个async对象不会执行

   有时候，我们希望即使第一个异步失败，而不要中断后面的异步操作，则需要将await放在try...catch中

   ```javascript
   async function f() {
       try{
           await Promise.reject('error')
       }catch(e){
           
       }
       return await Promise.resolve('hello world')
   }
   
   async function f(){
       await Promise.reject("error").cacth(e => {})
       return await Promise.resolve('hello world')
   }
   ```

   如果多个await命令，可以统一放在try...catch中

   ```javascript
   async function main(){
       try{
           const val1 = await firstStep()
           const val2 = await firstStep(val1)
           console.log(val2)
       }catch(err){
           console.log(err)
       }
   }
   ```

   **使用注意点**

   第一点：await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

   ```javascript
   async function myFunction() {
     try {
       await somethingThatReturnsAPromise();
     } catch (err) {
       console.log(err);
     }
   }
   
   // 另一种写法
   
   async function myFunction() {
     await somethingThatReturnsAPromise()
     .catch(function (err) {
       console.log(err);
     });
   }
   ```

   第二点，多个await如果不存在继发关系，最好同时触发

   ```javascript
   let foo = await getFoo()
   let bar = await getBar()
   ```

   上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。

   ```javascript
   let [foo,bar] = await Promise.all([getFoo(),getBar()])
   
   let fooPromise = getFoo()
   let barPromise = getBar()
   let foo = await fooPromise
   let bar = await barPromise
   ```

   第三点：await命令只能用在async函数中，若用在普通函数，报错

   第四点：async函数可以保留运行堆栈

   ```javascript
   const a = () => {
       b().then(()=>c())
   }
   
   //改写
   const a = async () => {
       await b()
       c;
   }
   ```

   

4. #### **async函数的是实现原理**

5. #### **与其他异步处理方法的比较**

   三种方式对比

   ```javascript
   // promise
   function chainAnimationsPromise(elem,animations){
   	let ret = null
       let p = Promise.resolve()
       for(let anim of animations){
           p = p.then((val)=>{
               ret = val
               return anim(elem)
           })
       }
       
       return p.catch((err)=>{
           
       }).then(()=>{
           return ret
       })
   }
   
   // gen
   function chainAnimationsGenerator(elem,animations){
       return spawn(function * () {
           let ret = null
           try{
               for (let anim of animations){
                   ret = yield anim(elem)
               }
           }catch(e){
               
           }
           return ret
       })
   }
   
   // async
   async function chainAnmationAsync(elem,animations){
       let ret = null
       try{
           for (let anim of animations){
               ret = await anim(elem)
           }
       }catch(e){
           
       }
       return ret
   }
   ```

   

6. #### **实例：按顺序完成异步操作**

7. #### **顶层await**

   