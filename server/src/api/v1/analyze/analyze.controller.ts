import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzeDTO } from './dtos/analyze.dto';

@Controller('analyze')
export class AnalyzeController {
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