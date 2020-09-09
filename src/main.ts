import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 80, retryAttempts: 5, retryDelay: 3000 },
    });

    await app.startAllMicroservicesAsync();
    await app.listen(80);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();