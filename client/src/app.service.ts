import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}

  async getHello() {
    return this.client.emit('greeting', 'Progressive Coder');
  }

  async createMessage(data: any) {
    return this.client.emit('any_message', data);
  }

  async getHelloAsync() {
    const message = await this.client.send(
      'greeting-async',
      'Progressive Coder',
    );

    return message;
  }
}
