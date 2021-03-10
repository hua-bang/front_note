/**
 * @author hug
 * @date 2021/3/10 10:31
 */
let singleton = function() {
    let privateVariable = 10;
    return {
        add() {
            privateVariable++;
        },
        get() {
            return privateVariable;
        }
    }
}()
singleton.add();
console.log(singleton.get());
