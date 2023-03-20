import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { AnalyzeService } from './analyze.service';
import { AnalyzeDTO } from './dtos/analyze.dto';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}



  @Get('/Model')
  async getModel(@Query('start')start:string,@Query('end')end:string) {
    return  this.analyzeService.getAnalyzeData(start,end)
  }

  @Post()
  getSearchResults(@Body() body: AnalyzeDTO) {
    console.log(body);
    // TODO: Return real data using this format. an array of objects
    return [
      {
        confidence: '69%',
        support: '75%',
        consequent: 'Olives',
        antecedent: 'Onions',
      },
      {
        confidence: '55%',
        support: '13%',
        consequent: 'Pineaplles',
        antecedent: 'Melon',
      },
    ];
  }
}
