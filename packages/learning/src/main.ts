import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function express_bootstrap(): Promise<INestApplication>{
  return await NestFactory.create<NestExpressApplication>(AppModule);
}

async function fastify_bootstrap(): Promise<INestApplication>{
  return await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
}

async function bootstrap() {
  const app = await express_bootstrap();
  //const app = await fastify_bootstrap();
  await app.listen(3000);
}
bootstrap();
