import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class DashboardService {
  constructor(private readonly httpService: HttpService) {}

  getHeaderCards() {
    return this.httpService.get('http://localhost:3001/get-header').pipe(map((res) => res.data));
  }

  getBodyCards() {
    return this.httpService.get('http://localhost:3001/get-body').pipe(map((res) => res.data));
  }
}
