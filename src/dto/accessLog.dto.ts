import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString } from 'class-validator';

export class AccessLogDTO {
  @Expose()
  @IsOptional()
  @IsString()
  rule_uuid?: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  lock!: string;

  @Expose()
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  attempted_at!: number;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  attempt_status!: boolean;
}
