import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

type TEnvConfig = {
  port: number;
  dbUri: string;
  secretPrivate: string;
  secretHTTP: string;
};

export const params: TEnvConfig = {
  port: parseInt(process.env.PORT),
  dbUri: process.env.DB_URI,
  secretPrivate: process.env.SECRET_PRIVATE,
  secretHTTP: process.env.SECRET_HTTP
};
