import { AccessLog } from '@/entities/accessLog.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { params } from './enviroment';
import { SeederOptions } from 'typeorm-extension';
import MainSeeder from '@/fixtures/seeders/main.seeder';
import { AccessLogFactory } from '@/fixtures/factories/accessLog.factory';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: params.dbUri,
  synchronize: true,
  logging: false,
  entities: [AccessLog],
  seeds: [MainSeeder],
  factories: [AccessLogFactory]
};

export const appDataSource = new DataSource(options);