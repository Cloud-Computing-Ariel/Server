import { Controller, Post, Body } from '@nestjs/common';
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
    // const headerCardsData: HeaderCardsDto = {
    //   totalOpenOrders: 2,
    //   totalOrders: 10,
    //   openStores: 5,
    //   avgTimeSpent: 5,
    // };
    this.dashboardGateway.server.emit('onHeaderCardsUpdate', body); // TODO: Replace this with real data, also make sure the needed function calls this
    return body;
  }

  @Post('/update-body-cards')
  updateBodyCards(@Body() body: BodyCardsDto) {
    // const bodyCardsData: BodyCardsDto = {
    //   topToppingsOrdered: {
    //     data: [18, 15, 8, 3, 2],
    //     categories: ['onion', 'pineapple', 'ollives', 'mushroom', 'sweet potato'],
    //   },
    //   topBranchesLowestWaitTime: { data: [1, 3, 5], categories: ['Afula', 'Haifa', 'Tel Aviv'] },
    //   DistriByArea: { data: [15, 25, 30, 40], categories: ['Dan', 'Center', 'Haifa', 'North'] },
    //   numberOfOrders: { data: [40, 24, 14, 10, 5], categories: ['Bat Yam', 'Afula', 'Haifa', 'Tel Aviv', 'Ashdod'] },
    // };
    this.dashboardGateway.server.emit('onBodyCardsUpdate', body); // TODO: Replace this with real data, also make sure the needed function calls this
    return { isSuccess: true };
  }
}
