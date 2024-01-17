import { AccessLogController } from '@/controllers/accessLog.controller';
import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';
import { validateSecretKey } from '@/middlewares/validateSecretKey';

export class AccessLogRoute implements IRoute {
  public path = '/logs';
  public router = Router();
  private controller: AccessLogController;

  constructor() {
    this.controller = new AccessLogController();
    this.init();
  }

  private init() {
    this.router.post('/', validateSecretKey(), this.controller.createLogEntry);
    this.router.get('/', this.controller.getLogs);
  }
}
