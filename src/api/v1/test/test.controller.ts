import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestDto } from './test.dto';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  test() {
    return this.testService.test();
  }

  @Post()
  testPost(@Body() body: TestDto) {
    return body;
  }
}
