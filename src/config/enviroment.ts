import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

type TEnvConfig = {
  port: number;
  dbUri: string;
  secret: string;
};

export const params: TEnvConfig = {
  port: parseInt(process.env.PORT),
  dbUri: process.env.DB_URI,
  secret: process.env.SECRET,
};
