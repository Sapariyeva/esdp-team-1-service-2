import { appDataSource } from '@/config/dataSource';
import { AccessLogDTO } from '@/dto/accessLog.dto';
import { AccessLog } from '@/entities/accessLog.entity';
import { IAccessLog } from '@/interfaces/accessLog.interface';
import { IQueryParams } from '@/interfaces/query.interface';
import { Between, FindManyOptions, FindOperator, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

interface IDateFilter {
  attempted_at?: FindOperator<number>;
}

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
    let findOptions: FindManyOptions<AccessLog> = {
      order: { attempted_at: 'DESC' },
      take: 30
    };
    let dateOption: IDateFilter = {};

    if (query) {
      const { offset, lock, phone, onlyDenied, onlyGranted, datefrom, dateto } = query;

      if (lock) {
        findOptions.where = { ...findOptions.where, lock };
      }

      if (phone) {
        findOptions.where = { ...findOptions.where, phone };
      }

      if (onlyDenied || onlyGranted) {
        if (onlyDenied) {
          findOptions.where = { ...findOptions.where, attempt_status: false };
        } else if (onlyGranted) {
          findOptions.where = { ...findOptions.where, attempt_status: true };
        }
      }

      if (datefrom && dateto) {
        findOptions.where = { ...findOptions.where, attempted_at: Between(datefrom, dateto)};
      } else if (datefrom && !dateto) {
        findOptions.where = { ...findOptions.where, attempted_at: MoreThanOrEqual(datefrom)};
      } else if (!datefrom && dateto) {
        findOptions.where = { ...findOptions.where, attempted_at: LessThanOrEqual(dateto)};
      }

      findOptions.where = { ...findOptions.where, ...dateOption };
      findOptions.skip = offset || 0;
    }

    return this.find(findOptions);
  }
}
