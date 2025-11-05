import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = (
  configService: ConfigService,
): MongooseModuleOptions => {
  return {
    uri: getMongoString(configService),
  };
};

const getMongoString = (configService: ConfigService): string => {
  const login = configService.get<string>('MONGO_LOGIN');
  const password = configService.get<string>('MONGO_PASSWORD');
  const host = configService.get<string>('MONGO_HOST');
  const port = configService.get<string>('MONGO_PORT');
  const authDatabase = configService.get<string>('MONGO_AUTHDATABASE');

  // Добавляем проверки
  if (!login || !password || !host || !port || !authDatabase) {
    throw new Error('Missing MongoDB configuration variables');
  }

  return `mongodb://${login}:${password}@${host}:${port}/${authDatabase}`;
};
