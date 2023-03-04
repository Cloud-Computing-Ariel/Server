import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { BodyCardsDto, HeaderCardsDto } from '../../dashboard/dtos/dashboard.dto';

@WebSocketGateway({ cors: true })
export class DashboardGateway {
  // use this when we want to send msg to client
  // this.server.emit(eventName, msg)
  @WebSocketServer() server: Server;

  @SubscribeMessage('onDashboardUpdate')
  handleUpdate(@ConnectedSocket() client: Socket, @MessageBody() data: unknown): WsResponse<unknown> {
    // we can remove this function when the data will be dynamic and real.
    const event = 'onDashboardUpdate';
    const headerCardsData: HeaderCardsDto = {
      totalOpenOrders: 2,
      totalOrders: 10,
      openStores: 5,
      avgTimeSpent: 5,
    };

    const bodyCardsData: BodyCardsDto = {
      topToppingsOrdered: {
        data: [18, 15, 8, 3, 2],
        categories: ['onion', 'pineapple', 'ollives', 'mushroom', 'sweet potato'],
      },
      topBranchesLowestWaitTime: { data: [1, 3, 5], categories: ['Afula', 'Haifa', 'Tel Aviv'] },
      DistriByArea: { data: [15, 25, 30, 40], categories: ['Dan', 'Center', 'Haifa', 'North'] },
      numberOfOrders: { data: [40, 24, 14, 10, 5], categories: ['Bat Yam', 'Afula', 'Haifa', 'Tel Aviv', 'Ashdod'] },
    };

    this.server.emit('onHeaderCardsUpdate', headerCardsData); // TODO: Replace this with real data, also make sure the needed function calls this
    this.server.emit('onBodyCardsUpdate', bodyCardsData); // TODO: Replace this with real data, also make sure the needed function calls this
    return { event, data };
  }
}
