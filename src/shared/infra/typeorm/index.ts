import { createConnection } from 'typeorm';
require("dotenv").config();

const rootDir = process.env.APP_ENV === 'dev' ?
  "src" :
  "dist";

const extensionFile = process.env.APP_ENV === 'dev' ?
  "ts" :
  "js";


const config:any = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [rootDir + `/modules/**/infra/typeorm/entities/*.${extensionFile}`],
    migrations: [rootDir + `/shared/infra/typeorm/migrations/*.${extensionFile}`],
    cli: {
      migrationsDir: rootDir + "/shared/infra/typeorm/migrations"
    },
    ssl: {
      rejectUnauthorized: false
   },
   mongo: {
    name: process.env.MONGO_NAME,
    type: process.env.MONGO_TYPE,
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE,
    port: process.env.MONGO_PORT,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [rootDir + `/modules/**/infra/typeorm/schemas/*.${extensionFile}`]
   }
}

createConnection(config);
