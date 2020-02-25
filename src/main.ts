import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.use(morgan('combined'));
  await app.listen(port, () => console.log(`App is Running on ${port}`));
}
bootstrap();
