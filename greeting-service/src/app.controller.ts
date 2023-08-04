import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern('greeting')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  const channel = context.getChannelRef();
  const originalMsg = context.getMessage();

  console.log  (originalMsg.content.toString());
}


  @MessagePattern('greeting-async')
  async getGreetingMessageAsync(name: string): Promise<string> {
    console.log(name)
    return `Hello ${name}`;
  }
}
