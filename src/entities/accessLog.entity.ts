import { IAccessLog } from '@/interfaces/accessLog.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'access_logs' })
export class AccessLog implements IAccessLog {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column({ nullable: true })
  access_uuid!: string;

  @Column()
  lock!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ type: 'bigint' })
  attempted_at!: number;

  @Column()
  attempt_status!: boolean;
}
