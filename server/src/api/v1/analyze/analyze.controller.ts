import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AnalyzeService } from './analyze.service';
import { AnalyzeDTO } from './dtos/analyze.dto';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService, private readonly http: HttpService) {}

  @Get('/Model')
  async getModel(@Query('start') start: string, @Query('end') end: string) {
    return this.analyzeService.getAnalyzeData(start, end);
  }

  @Post()
  getAnalyzeResults(@Body() body: AnalyzeDTO) {
    return this.http
      .get(`http://localhost:3004/?from=${body.fromDate}&to=${body.toDate}`)
      .pipe(map((data) => data.data));
  }
}
