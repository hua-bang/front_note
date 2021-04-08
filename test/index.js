var o = Object.create({x:1,y:2})
o.z = 3;
let {x, ...{y,z}} = o
console.log(x, y, z)