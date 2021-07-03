/**
 * 生成中心对称数
 * 
 * 1. 特殊情况 0 返回的是"" 而1 -> [0, 1, 8]
 * 2. 所有生成的中心数字都是可以拆分成 2n 或 2n+1 每一次都是在n-2的情况下左右加上[0, 1 ,8];
 *  
 * @param {*} n 
 * @returns arr;
 */
function getCentrosymmetric(n) {
    if (n === 0) {
        return [""];   
    }

    if (n === 1) {
        return ["0", "1", "8"];
    }

    const strArr = getCentrosymmetric(n - 2);

    const result = [];

    ["0", "1", "8"].forEach(v => {
        strArr.forEach(str => {
            result.push(`${v}${str}${v}`);
        })
    })

    return result;
}

console.log(getCentrosymmetric(5));