// 在前端开发中，通常会把多个js文件合并成一个文件，以减少网络请求次数，达到优化加载速度的目的，但是当文件之间存在依赖关系时，对js合并的顺序，会有一定的要求，比如 A.js 依赖了 B.js，那打包后的文件，B.js 需要排在 A.js 的前面。

// 实现一个函数`resolve(tree)`，根据js的依赖关系树 tree，输出合理的打包顺序的数组（结果可能不唯一，输出其中一种即可）。

// 样例

// ```javascript
// var tree1 = {
//     name: 'main.js',
//     require: [{
//         name: 'A.js'
//     }, {
//         name: 'B.js'
//     }]
// }
// resolve(tree1) // ['A.js', 'B.js', 'main.js']

// var tree2 = {
//     name: 'page.js',
//     require: [{
//         name: 'A.js',
//         require: [{
//             name: 'B.js',
//             require: [{
//                 name: 'C.js'
//             }]
//         }]
//     }, {
//         name: 'D.js',
//         require: [{
//             name: 'C.js'
//         }, {
//             name: 'E.js'
//         }]
//     }]
// }
// resolve(tree2) // ['C.js', 'E.js', 'D.js', 'B.js', 'A.js', 'page.js']
// ```


// 递归
function resolve(tree) {
    let arr = [];

    function resolveTree(tree) {
        if(tree.require) {
            tree.require.forEach(v => {
                resolveTree(v);
            })
        }
        if(!arr.includes(tree.name)) {
            arr.push(tree.name)
        }
    }
    
    resolveTree(tree);
    return arr;
}

var tree2 = {
    name: 'page.js',
    require: [{
        name: 'A.js',
        require: [{
            name: 'B.js',
            require: [{
                name: 'C.js'
            }]
        }]
    }, {
        name: 'D.js',
        require: [{
            name: 'C.js'
        }, {
            name: 'E.js'
        }]
    }]
}
console.log(resolve(tree2))  // ['C.js', 'E.js', 'D.js', 'B.js', 'A.js', 'page.js']