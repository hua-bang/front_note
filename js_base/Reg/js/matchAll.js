String.prototype.matchAll = function (reg) {
    let res = this.match(reg);
    if (res) {
        let str = this.replace(res[0], "^".repeat(res[0].length));
        let match = str.matchAll(reg) || [];
        return [res, ...match];
    }
};
let str = "houdunren";
console.dir(str.matchAll(/(U)/i));

console.log("自动写策划");
console.log("脑洞大开中(写策划ing..)");
console.log("写完了，统计字数0")
console.log("绘画中");
console.log("绘画完成，统计完成画面0");