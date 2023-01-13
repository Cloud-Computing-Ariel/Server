import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('header-cards')
  getHeaderCards() {
    return this.dashboardService.getHeaderCards();
  }

  @Get('body-cards')
  getBodyCards() {
    return this.dashboardService.getBodyCards();
  }
}
