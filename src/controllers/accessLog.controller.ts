import { AccessLogDTO } from '@/dto/accessLog.dto';
import { IQueryParams } from '@/interfaces/query.interface';
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
  };

  public getLogs: RequestHandler = async (req, res, next): Promise<void> => {
    try {
      const queryParams = req.query as Record<string, string>;
      const parsedQuery: IQueryParams = {
        offset: queryParams.offset ? parseInt(queryParams.offset) : undefined,
        datefrom: queryParams.datefrom ? parseInt(queryParams.datefrom) : undefined,
        dateto: queryParams.dateto ? parseInt(queryParams.dateto) : undefined,
        phone: queryParams.phone || undefined,
        lock: queryParams.lock || undefined,
        onlyGranted: queryParams.onlyGranted !== undefined ? true : undefined,
        onlyDenied: queryParams.onlyDenied !== undefined ? true : undefined
      }
      const logs = await this.service.getLogs(parsedQuery);
      res.status(200).send({
        success: true,
        logs
      })
    } catch (err) {
      next(err);
    }
  };
}
