import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = String(process.env.APP_PORT);
  await app.listen(PORT);
}
bootstrap();
