import { Injectable } from '@nestjs/common';
import { BodyCardsDto, HeaderCardsDto } from './dtos/dashboard.dto';

@Injectable()
export class DashboardService {
  getHeaderCards() {
    const headerData: HeaderCardsDto[] = [{ num: 11 }, { num: 22 }, { num: 33 }, { num: 44 }];
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
