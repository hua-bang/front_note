const hd = `<h1>houdunren.com</h1>`;
console.log(/<(h1)>.+<\/\1>/.test(hd));

let hd1 = "houdunren.com";
console.log(hd1.match(/houdun(ren)\.(com)/));

let hd2 = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>
    <h2>12</h2>
  </h2>
`;
console.table(hd2.match(/<(h[1-6])>[\s\S]*<\/\1>/g));


console.log(parseInt(09, 10));
console.log(/^(\d{1,2}|100)$/.test(parseInt(09, 10)));

let email = "1964760211@qq.com";

let emailReg = /^[\w\-]{1,10}@[\w\-]+\.(com|cn|org.net)$/i;

console.log(email.match(emailReg));

let hd3 = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>hdcms</h2>
`;
let reg3 = /<(h[1-6])>([\s\S]*)<\/\1>/gi;

console.log(hd3.replace(reg3, `<p>$2</p>`));

let hd4 = `
  https://www.houdunren.com
  http://houdunwang.com
  https://hdcms.com
`;

let reg4 = /https?:\/\/(?:\w+\.)?\w+\.(?:com|org|cn)/gi;
while ((v = reg4.exec(hd4))) {
    console.dir(v);
}

// group
console.dir("<h1>houdunren.com</h1>".match(/<(?<hTag>h[1-6])>[\s\S]*<\/\1>/));