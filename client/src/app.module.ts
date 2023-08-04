import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {name: 'GREETING_SERVICE',transport: Transport.RMQ,
      options : {
        urls: ['amqp://admin:admin@localhost:5672'],
        queue: 'greeting_queue',
      }
    }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
