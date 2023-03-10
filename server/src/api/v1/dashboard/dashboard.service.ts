import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  constructor(private readonly httpService: HttpService) {}

  getHeaderCards() {
    this.httpService.get('http://localhost:3001/get-header');
  }

  getBodyCards() {
    this.httpService.get('http://localhost:3001/get-body');
  }
}
