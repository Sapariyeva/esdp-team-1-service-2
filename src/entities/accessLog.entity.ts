import { IAccessLog } from '@/interfaces/accessLog.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'access_logs' })
export class AccessLog implements IAccessLog {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column()
  rule_uuid!: string;

  @Column()
  lock!: string;

  @Column()
  phone!: string;

  @Column({ type: 'bigint' })
  attempted_at!: number;

  @Column()
  attempt_status!: boolean;
}
