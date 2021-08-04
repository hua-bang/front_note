const Koa = require('koa');
const cors = require('koa-cors');
const json = require("koa-json");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(cors());
app.use(json());
app.use(bodyParser());


app.use(async ctx => {
  let request = ctx.request;
  console.log(request.body);
  ctx.body = {
    name: "hug"
  };
});

app.listen(3000);