import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
  await app.listen(
    process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
  );
  console.log(`Running on port ${port}`);
}
bootstrap();
