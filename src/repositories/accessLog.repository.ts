import { appDataSource } from '@/config/dataSource';
import { AccessLogDTO } from '@/dto/log.dto';
import { AccessLog } from '@/entities/accessLog.entity';
import { Repository } from 'typeorm';

export class AccessLogRepository extends Repository<AccessLog> {
  constructor() {
    super(AccessLog, appDataSource.createEntityManager());
  }

  async createLogEntry(dto: AccessLogDTO): Promise<void> {
  }

  // async getLogs(uuid: string): Promise<IAccessLog[]> {
  // }
}
