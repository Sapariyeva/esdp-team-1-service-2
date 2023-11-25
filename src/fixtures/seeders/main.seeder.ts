import { AccessLog } from '@/entities/accessLog.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class MainSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const accessLogFactory = factoryManager.get(AccessLog);
    await accessLogFactory.saveMany(100);
  }
}
