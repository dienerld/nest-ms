import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('GREETING_SERVICE') private client: ClientRMQ){}

  async getHello(){
    return this.client.emit('greeting', 'Progressive Coder');
  }

  async getHelloAsync() {
    const message = await this.client.emit('greeting-async', 'Progressive Coder');
    return message;
  }
}
