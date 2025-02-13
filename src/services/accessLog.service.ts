import { AccessLogDTO } from '@/dto/accessLog.dto';
import { IAccessLog } from '@/interfaces/accessLog.interface';
import { IQueryParams } from '@/interfaces/query.interface';
import { AccessLogRepository } from '@/repositories/accessLog.repository';

export class AccessLogService {
  private repository: AccessLogRepository;

  constructor() {
    this.repository = new AccessLogRepository();
  }

  public createLogEntry = async (dto: AccessLogDTO): Promise<IAccessLog> => {
    return await this.repository.createLogEntry(dto);
  };

  public getLogs = async (query?: IQueryParams): Promise<IAccessLog[]> => {
    return await this.repository.getLogs(query);
  };
}
