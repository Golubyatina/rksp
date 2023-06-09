import { BaseExceptionFilter, HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exceptionlogger/exceptionLogger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api');
  const httpAdapter  = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  const config = new DocumentBuilder()
    .setTitle('Statistics API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_docs', app, document);
  await app.listen(3001);


}
bootstrap();
