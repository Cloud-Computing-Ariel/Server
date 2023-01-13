import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({
  imports: [],
  providers: [TestService],
  controllers: [TestController],
})
export class V1Module {}
