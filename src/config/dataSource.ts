import { AccessLog } from '@/entities/accessLog.entity';
import { DataSource } from 'typeorm';
import { params } from './enviroment';

export const appDataSource = new DataSource({
  type: 'postgres',
  url: params.dbUri,
  synchronize: true,
  logging: false,
  entities: [AccessLog],
});
