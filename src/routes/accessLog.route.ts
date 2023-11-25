import { AccessLogController } from '@/controllers/accessLog.controller';
import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';

export class AccessLogRoute implements IRoute {
  public path = '/';
  public router = Router();
  private controller: AccessLogController;

  constructor() {
    this.controller = new AccessLogController();
    this.init();
  }

  private init() {
    this.router.post('/', this.controller.createLogEntry);
    this.router.get('/', this.controller.getLogs);
  }
}
