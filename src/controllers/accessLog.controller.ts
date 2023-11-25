import { AccessLogService } from '@/services/accessLog.service';
import { RequestHandler } from 'express';

export class AccessLogController {
  private service: AccessLogService;

  constructor() {
    this.service = new AccessLogService();
  }

  public createLogEntry: RequestHandler = async (req, res, next): Promise<void> => {
    this.service.createLogEntry(req.body)
  };

  public getLogs: RequestHandler = async (req, res, next): Promise<void> => {
  };
}
