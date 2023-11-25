import { appDataSource } from '@/config/dataSource';
import { AccessLogDTO } from '@/dto/accessLog.dto';
import { AccessLog } from '@/entities/accessLog.entity';
import { IAccessLog } from '@/interfaces/accessLog.interface';
import { IQueryParams } from '@/interfaces/query.interface';
import { Repository } from 'typeorm';

export class AccessLogRepository extends Repository<AccessLog> {
  constructor() {
    super(AccessLog, appDataSource.createEntityManager());
  }

  async createLogEntry(dto: AccessLogDTO): Promise<IAccessLog> {
    const { rule_uuid, phone, lock, attempted_at, attempt_status } = dto;
    const newLogEntry = new AccessLog();
    if (rule_uuid) newLogEntry.rule_uuid = rule_uuid;
    if (phone) newLogEntry.phone = phone;
    newLogEntry.lock = lock;
    newLogEntry.attempted_at = attempted_at;
    newLogEntry.attempt_status = attempt_status;
    return this.save(newLogEntry);
  }

  async getLogs(query?: IQueryParams): Promise<IAccessLog[]> {
    return this.find();
  }
}
