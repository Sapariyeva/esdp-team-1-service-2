import { AccessLog } from '@/entities/accessLog.entity';
import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';

export const AccessLogFactory = setSeederFactory(AccessLog, (faker: Faker) => {
  const log = new AccessLog();
  log.access_uuid = faker.string.uuid();
  log.lock = faker.string.uuid();
  log.phone = faker.phone.number();
  log.attempted_at = faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2024-01-01T00:00:00.000Z' }).getTime();
  log.attempt_status = faker.datatype.boolean(); 
  return log;
});