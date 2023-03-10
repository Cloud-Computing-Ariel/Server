import { Controller, Post, Body, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { BodyCardsDto, HeaderCardsDto } from './dtos/dashboard.dto';
import { DashboardGateway } from '../gateways/dashboard/dashboard.gateway';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly dashboardGateway: DashboardGateway,
  ) {}

  @Post('/update-header-cards')
  updateHeaderCards(@Body() body: HeaderCardsDto) {
    this.dashboardGateway.server.emit('onHeaderCardsUpdate', body);
    return { isSuccess: true };
  }

  @Post('/update-body-cards')
  updateBodyCards(@Body() body: BodyCardsDto) {
    this.dashboardGateway.server.emit('onBodyCardsUpdate', body);
    return { isSuccess: true };
  }
  @Get('/header-cards')
  async getHeaderCards() {
    return this.dashboardService.getHeaderCards();
  }

  @Get('/body-cards')
  async getBodyCards() {
    return this.dashboardService.getBodyCards();
  }
}
