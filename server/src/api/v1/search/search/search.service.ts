import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  getSearchResults(date: string, branch: string): Observable<AxiosResponse<any[]>> {
    return this.httpService.get(`http://localhost:3002/search?date=${date}&branch=${branch}`);
  }
}
