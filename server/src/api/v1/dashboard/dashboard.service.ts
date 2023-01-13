import { Injectable } from '@nestjs/common';
import { BodyCardsDto, HeaderCardsDto } from './dtos/dashboard.dto';

@Injectable()
export class DashboardService {
  getHeaderCards() {
    const headerData: HeaderCardsDto = {
      allOrders: 150,
      openOrders: 5,
      openBranchs: 4,
      avgTreatTime: 0.5,
    };
    return headerData;
  }

  getBodyCards() {
    const bodyData: BodyCardsDto = {
      byArea: {
        areas: ['Center', 'South', 'North', 'Haifa'],
      },
      byTime: {
        orders: [1, 3, 50, 123],
        time: [new Date(100), new Date(200), new Date(300), new Date(400)],
      },
      topBranches: { branches: ['Afula', 'Haifa', 'Tel Aviv'] },
      topToppings: { toppings: ['Onion', 'Olives', 'Mushrooms'] },
    };
    return bodyData;
  }
}
