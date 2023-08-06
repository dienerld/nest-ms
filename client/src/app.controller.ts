import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async getHello(@Body() data: any) {
    return this.appService.createMessage(data);
  }

  @Get('/greeting-async')
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }
}
