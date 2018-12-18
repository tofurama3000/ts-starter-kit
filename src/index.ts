import Koa from 'koa';
import mongoose from 'mongoose';
import { hello } from './hello';

mongoose.connect('mongodb://localhost/prototype');

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: Koa.Context) => {
  ctx.body = hello();
});

app.listen(port);
