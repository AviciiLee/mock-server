const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("../mock/index");

const app = new Koa();
const router = new Router();

const getRsp = (fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn();
      resolve(res);
    }, 500);
  });
};

mockList.forEach((item) => {
  router[item.method](item.path, async (ctx) => {
    ctx.body = await getRsp(item.response);
  });
});
app.use(router.routes());
app.listen(3002);
