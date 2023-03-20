import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyzeService {

constructor(private readonly httpService: HttpService) {}
getAnalyzeData(from:string, to:string){
    this.httpService.get(`http://localhost:3004/?from=${from}&to=${to}`);
}
}