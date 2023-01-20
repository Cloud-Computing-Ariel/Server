import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class DashboardGateway {
  // use this when we want to send msg to client
  // this.server.emit(eventName, msg)
  @WebSocketServer() server: Server;

  @SubscribeMessage('onDashboardUpdate')
  handleUpdate(@ConnectedSocket() client: Socket, @MessageBody() data: unknown): WsResponse<unknown> {
    const event = 'onDashboardUpdate';
    return { event, data };
  }
}
