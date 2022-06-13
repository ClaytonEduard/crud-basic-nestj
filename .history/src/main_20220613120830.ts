import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // transforma os dados na tipagem correta
    transform: true,
    whitelist: true,
    // nao dei
    forbidNonWhitelisted: true,
  }))




  await app.listen(3000);
}
bootstrap();
