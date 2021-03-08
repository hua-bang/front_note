/**
 * @author hug
 * @date 2021/3/8 21:29
 */
const o = {};

// 原始
try{
    Object.defineProperty(o,"foo","bar");
    console.log("success")
}catch (err) {
    console.log(err)
}

// 使用Reflect反射 状态标志 返回布尔
if(Reflect.defineProperty(o,"foo",{value: "bar"})) {
    console.log("success");
} else {
    console.log("error");
}

class MyReflect {
    static defineProperty(object,propertyKey,attributes) {
        try{
            Object.defineProperty(object,propertyKey,attributes);
            return true
        }catch (err) {
            return false;
        }
    }
}

if(MyReflect.defineProperty(o,"bar",{value: "bar"})) {
    console.log("success");
} else {
    console.log("error");
}

console.log(o.bar);
