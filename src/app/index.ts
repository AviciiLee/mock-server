import Koa, { Context } from "koa";
import Router from "koa-router";
import mockList from "../mock";
import type { Res } from "../types/request";
const app = new Koa();
const router = new Router<string, any>();

const getRsp = (fn: () => Res) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn();
      resolve(res);
    }, 500);
  });
};

mockList.forEach((item) => {
  (router as any)[item.method](item.path, async (ctx: Context) => {
    ctx.body = await getRsp(item.response);
  });
});
app.use(router.routes());
app.listen(3002);
