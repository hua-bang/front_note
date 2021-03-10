/**
 * @author hug
 * @date 2021/3/10 8:00
 */
function King() {
    console.log(new.target);
}

new King(); //Function King
King(); //undefined
