import { AccessLogDTO } from '@/dto/accessLog.dto';
import { AccessLogService } from '@/services/accessLog.service';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { RequestHandler } from 'express';

export class AccessLogController {
  private service: AccessLogService;

  constructor() {
    this.service = new AccessLogService();
  }

  public createLogEntry: RequestHandler = async (req, res, next): Promise<void> => {
    try {
      const dto = plainToInstance(AccessLogDTO, req.body);
      const errs = await validate(dto, { whitelist: true });
      if (errs.length > 0) throw errs;
      const createdLog = await this.service.createLogEntry(dto);
      if (createdLog) {
        res.status(201).send({
          success: true,
        });
      } else {
        throw new Error('Error creating log entry');
      }
    } catch (err) {
      next(err);
    }
    this.service.createLogEntry(req.body);
  };

  public getLogs: RequestHandler = async (req, res, next): Promise<void> => {};
}
