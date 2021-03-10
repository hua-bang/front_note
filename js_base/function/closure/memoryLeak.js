/**
 * @author hug
 * @date 2021/3/10 9:41
 */

//element 至少被引用一次 会保存在内存中 不会自动小会
function assignHandler(el) {
    let element = document.querySelector(el);
    element.onclick = () => {
        console.log(element.id);
    }
}

// 改进
function assignHandler(el) {
    let element = document.querySelector(el);
    let id = element.id;
    element.onclick = () => {
        console.log(id);
    }
    element = null;
}
