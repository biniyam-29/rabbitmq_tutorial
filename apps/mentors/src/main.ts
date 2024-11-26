import { NestFactory } from '@nestjs/core';
import { MentorsModule } from './mentors.module';

async function bootstrap() {
  const app = await NestFactory.create(MentorsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
