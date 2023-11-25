import { AccessLogDTO } from '@/dto/log.dto';
import { AccessLogRepository } from '@/repositories/accessLog.repository';

export class AccessLogService {
  private repository: AccessLogRepository;

  constructor() {
    this.repository = new AccessLogRepository();
  }

  public createLogEntry = async (dto: AccessLogDTO): Promise<string | void> => {
    this.repository.createLogEntry(dto)
  };

  public getLogs = async (uuid: string): Promise<void> => {
  };
}
