import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { SearchController } from './search/search/search.controller';
import { SearchService } from './search/search/search.service';
import { AnalyzeController } from './analyze/analyze.controller';
import { AnalyzeService } from './analyze/analyze.service';
import { DashboardGateway } from './gateways/dashboard/dashboard.gateway';

@Module({
  imports: [],
  providers: [DashboardService, SearchService, AnalyzeService, DashboardGateway],
  controllers: [DashboardController, SearchController, AnalyzeController],
})
export class V1Module {}
