import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class AccessLogDTO {
  @Expose()
  @IsString()
  rule_uuid?: string;

  @Expose()
  lock!: string;

  @Expose()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone?: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  attempted_at!: number;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  attempt_status!: boolean;
}
