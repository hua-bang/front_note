/**
 * @author hug
 * @date 2021/3/6 12:20
 */
function IdMarker() {
    this.index = 0;
    return {
        next:() => {
            return {
                done: false,
                value: this.index++
            }
        }
    }
}

let idMarker = new IdMarker();
console.log(idMarker.next().value);
console.log(idMarker.next().value);
console.log(idMarker.next().value);
