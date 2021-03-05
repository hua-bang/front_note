/**
 * @author hug
 * @date 2021/3/5 10:12
 */
const User = (() => {
    const wm = new WeakMap();   //根据上下文 全局上下文外部访问不到 但是这个作用域是一直在的
    class User {
        constructor(id) {
            this.idProperty = Symbol("id");
            this.setId(id)
        }

        setPrivate(property, value) {
            const privateMembers = wm.get(this) || {};
            privateMembers[property] = value;
            wm.set(this,privateMembers);
        }

        getPrivate(property) {
            return wm.get(this)[property];
        }

        setId(id) {
            this.setPrivate(this.idProperty,id);
        }

        getId() {
            return this.getPrivate(this.idProperty);
        }

        setName(name) {
            this.setPrivate("name",name);
        }

        getName() {
            return this.getPrivate("name");
        }
    }
    return User;
})();

let a = new User(1);
console.log(a.getId());
a.setName("hug");
console.log(a.getName());
