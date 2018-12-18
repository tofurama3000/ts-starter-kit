import Koa from 'koa';
import { hello } from './hello';

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: Koa.Context) => {
  ctx.body = hello();
});

app.listen(port);
