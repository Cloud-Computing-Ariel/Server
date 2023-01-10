import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { V1Module } from './api/v1/v1.module';

@Module({
  imports: [
    V1Module,
    RouterModule.register([
      {
        path: 'api/v1',
        module: V1Module,
      },
    ]),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
