import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // transforma os dados na tipagem correta
    transform: true,
    whitelist: true,
    // nao deixa salvar o usuario se for fonecido outra caracteristica, ex: idade pois idade nao exite na class
    forbidNonWhitelisted: true,
  }))




  await app.listen(3000);
}
bootstrap();
