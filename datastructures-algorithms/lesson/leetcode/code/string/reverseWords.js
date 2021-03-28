// function reverseWords(string) {
//     // 1. 字符串按空格进行分隔 得到数组 数组顺序就是单词的顺序
//     let arr = string.split(" ");
//     // 每个字符串进行反转
//     let result = arr.map(v => {
//         // 遍历每个字符串 转成数组 然后反转后合并 得到倒序后的字符串 
//         return v.split("").reverse().join("");
//     }).join(" ");   //每个数组再按顺序合并

//     return result;  //得到结果
// }

// function reverseWords(string) {
//     // 1. 字符串按空格进行分隔 得到数组 数组顺序就是单词的顺序
//     let arr = string.split(" ");
//     // 2. 每个字符串进行反转
//     let result = arr.map(v => {
//         // 3. 遍历每个字符串 转成数组 然后反转后合并 得到倒序后的字符串 
//         let strArr = v.split("");
//         let beginIndex = 0, endIndex = strArr.length - 1;
//         while(beginIndex < endIndex) {
//             let temp = strArr[beginIndex];
//             strArr[beginIndex] = strArr[endIndex];
//             strArr[endIndex] = temp;
//             beginIndex++;
//             endIndex--;
//         }
//         return strArr.join("");
//     }).join(" ");   //4.每个数组再按顺序合并

//     return result;  //5.得到结果
// }

function reverseWords(string) {
    return string.split(" ").map(v => v.split("").reverse().join("")).join(" ");
}

export default reverseWords;