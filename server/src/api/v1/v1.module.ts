import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

@Module({
  imports: [],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class V1Module {}
