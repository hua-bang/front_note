let template = "我是{{ name }}, 年龄{{ age }}, 性别{{ sex }}";
let data = {
    name: "hug",
    age: 18,
    sex: "boy"
};

function render(template, data) {
    const reg = /\{\{(.*?)\}\}/;
    while(reg.test(template)) {
        let key = reg.exec(template)[1].trim();
        template = template.replace(reg, data[key]);
    }
    return template;
}

console.log(render(template, data));

let myTemplate = "我是[[ name]], 年龄[[age ]], 性别[[ sex]], [[name]]";

function myRender(template, data) {
    const reg = /\[\[(.*?)\]\]/;
    while(reg.test(template)) {
        let key = reg.exec(template)[1].trim();
        template = template.replace(reg, data[key]);
    }
    return template;
}
console.log(myRender(myTemplate, data));
