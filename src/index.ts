import cors from 'cors';
import { App } from './app';
import { params } from './config/enviroment';
import { AccessLogRoute } from './routes/accessLog.route';

const app = new App({
  port: params.port,
  middlewares: [cors()],
  controllers: [
    new AccessLogRoute(),
  ],
});

app.listen();

